import fse from 'fs-extra';
import glob from 'glob-promise';
import log from '../logger.mjs';

let writeDir = './data/talents';

(async () => {
  log('info', 'checking talents data');
  const files = await glob('./data/classes/*.js');
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

    const talents = Object.entries(content.talents)
      .filter(([key, talent]) => talent.startsWith('talent'))
      .map(([key, talent]) => ({ key, name: talent.split(':')[1] }));

    talents.forEach(async ({ key, name }) => {
      const expectedFile = `./data/talents/${content.id}/${key}-${name}.js`;

      if (!fse.existsSync(expectedFile)) {
        log(
          'error',
          `[talent:${name}] found in [class:${content.id}] but does not exist at ${expectedFile}`
        );
        return;
      }

      let fileContent;

      try {
        fileContent = (await import(`../../${expectedFile}`)).default;
      } catch (e) {
        console.log(`error loading ${expectedFile}`, e.message);
        return;
      }

      const id = fileContent.id;

      if (id !== name) {
        log(
          'error',
          `id ${id} does not match file name ${expectedFile}`
        );
      }

      const hasPowers = fileContent.powers?.length;

      if (hasPowers && !fileContent.description) {
        log(
          'error',
          `powers found, but no description on ${expectedFile}`
        );
        return;
      }

      const allStats = fileContent.stats || {};

      Object.entries(allStats).forEach(([key, value]) => {

        if (!value) {
          log(
            'error',
            `stat ${stat} missing value on ${expectedFile}`
          );
        }
        if (!stats[key]) {
          log(
            'error',
            `stat ${key} in ${expectedFile} does not exist`
          );
        }
      });
    });
  }
})();
