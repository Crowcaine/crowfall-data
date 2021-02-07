import glob from 'glob-promise';
import log from 'node-pretty-log';

const talentMap = {
  i1: ['l1', 'l2', 'l3'],
  i2: ['l4', 'l5', 'l6'],
  i3: ['l7', 'l8', 'l9']
};

(async () => {
  log('info', 'checking domain data');
  const files = await glob('./data/domains/*.js');

  for (let file of files) {
    let content;

    try {
      content = (await import(`../../${file}`)).default;
    } catch (e) {
      console.log(file);
      log('error', `unable to load file ${file}`);
      throw e;
    }

    const { requirements } = content;

    requirements
      .map((r) => r.split(':')[1])
      .forEach(async (promotion) => {
        try {
          let promotionContent = (
            await import(`../../data/promotions/${promotion}.js`)
          ).default;

          const classFile = `./data/classes/${promotionContent.class}.js`;
          let classContent = (await import(`../../${classFile}`))
            .default;

          const promotionTalent = Object.entries(
            classContent.talents
          ).find(([key, g]) => {
            return g === `promotion:${promotionContent.id}`;
          });

          const talentDomains = talentMap[promotionTalent[0]];

          const domains = talentDomains.map(
            (d) => classContent.talents[d].split(':')[1]
          );

          if (domains.indexOf(content.id) === -1) {
            log(
              'error',
              `[domain:${content.id}] found for [promotion:${promotionContent.id}] in ${classFile} but not found in ${file}`
            );
          }
        } catch (e) {
          log(
            'error',
            `file [promotion:${promotion}] in promotions does not exist`
          );
        }
      });
  }
})();
