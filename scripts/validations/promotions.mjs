import fse from 'fs-extra';
import glob from 'glob-promise';
import log from '../logger.mjs';

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

    Object.entries(content.stats).forEach(([key, value]) => {

      if (!value) {
        log('error', `[stat:${stat}] missing value in ${file}`);
      }

      if (!stats[key]) {
        log(
          'error',
          `[stat:${key}] not a predefined stat in ${file}`
        );
      }
    });
  }
})();
