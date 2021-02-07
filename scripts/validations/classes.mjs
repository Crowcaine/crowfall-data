import glob from 'glob-promise';
import log from 'node-pretty-log';

const talentMap = {
  i1: ['l1', 'l2', 'l3'],
  i2: ['l4', 'l5', 'l6'],
  i3: ['l7', 'l8', 'l9']
};

(async () => {
  log('info', 'checking class data');
  const files = await glob('./data/classes/*.js');

  for (let file of files) {
    let content;

    try {
      content = (await import(`../../${file}`)).default;
    } catch (e) {
      console.log(file);
      log('error', `unable to load file ${file}`);
      throw e;
    }

    const promotionTalent = Object.entries(content.talents).filter(
      ([key, g]) => {
        return g.startsWith('promotion');
      }
    );

    promotionTalent.map(([key, promotion]) => {
      const talentDomains = talentMap[key].map(
        (d) => content.talents[d].split(':')[1]
      );

      talentDomains.forEach(async (domain) => {
        const domainFile = `../../data/domains/${domain}.js`;
        const domainContent = (await import(domainFile)).default;

        if (domainContent.requirements.indexOf(promotion) === -1) {
          log(
            'error',
            `[${promotion}] not found for [domain:${domainContent.id}] in ${domainFile}`
          );
        }
      });
    });
  }
})();
