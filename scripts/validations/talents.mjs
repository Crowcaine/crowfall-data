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

      if (!fileContent.grants) {
        log('error', `grants is missing from ${expectedFile}`);
        return;
      }

      const hasPowerGrant = fileContent.grants.some((g) =>
        g.startsWith('power')
      );

      if (hasPowerGrant && !fileContent.description) {
        log(
          'error',
          `grants found, but no description on ${expectedFile}`
        );
        return;
      }

      fileContent.grants.forEach((s) => {
        const prefix = s.split(':')[0];
        const invalid =
          [
            'stat',
            'power',
            'proficiency',
            'equipment',
            'slot'
          ].indexOf(prefix) === -1;

        if (invalid) {
          log(
            'error',
            `invalid grant ${prefix} prefix on ${expectedFile}`
          );
        }
      });

      const allStats = fileContent.grants.filter((g) =>
        g.startsWith('stat')
      );

      allStats.forEach((s) => {
        const stat = s.split(':')[1];
        const value = s.split(':')[2];

        if (!value) {
          log(
            'error',
            `stat ${stat} missing value on ${expectedFile}`
          );
        }

        if (stat === 'critical-heal-chance') {
          console.log(stat);
        }

        if (!stats[stat]) {
          log(
            'error',
            `stat ${stat} in ${expectedFile} does not exist`
          );
        }
      });
    });
  }
})();
