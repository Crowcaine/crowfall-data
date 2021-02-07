import fse from 'fs-extra';
import glob from 'glob-promise';
import log from 'node-pretty-log';

let writeDir = './data/promotions';

(async () => {
  log('info', 'checking promotion data');
  const files = await glob('./data/promotions/*.js');
  const stats = (await import(`../../data/stats/index.js`)).default;

  for (let file of files) {
    let content;

    try {
      content = (await import(`../../${file}`)).default;
    } catch (e) {
      console.log(file);
      log('error', `unable to load file ${file}`);
      throw e;
    }

    fse.ensureDirSync(writeDir);

    content.grants.forEach((s) => {
      const prefix = s.split(':')[0];
      const invalid =
        [
          'stat',
          'mastery',
          'power',
          'proficiency',
          'equipment',
          'tray',
          'slot'
        ].indexOf(prefix) === -1;

      if (invalid) {
        log('error', `invalid grant ${prefix} prefix in ${file}`);
      }
    });

    const allStats = content.grants.filter((g) =>
      g.startsWith('stat')
    );

    allStats.forEach((s) => {
      const stat = s.split(':')[1];
      const value = s.split(':')[2];

      if (!value) {
        log('error', `[stat:${stat}] missing value in ${file}`);
      }

      if (!stats[stat]) {
        log(
          'error',
          `[stat:${stat}] not a predefined stat in ${file}`
        );
      }
    });
  }
})();
