import { domains, races, classes } from './enums.mjs';
import glob from 'glob-promise';
import log from '../logger.mjs';

(async () => {
  log('info', 'checking minor data');
  const files = await glob('./data/minors/*.js');
  const stats = (await import(`../../data/stats/index.js`)).default;

  for (let file of files) {
    let content;

    try {
      content = (await import(`../../${file}`)).default;
    } catch (e) {
      log('error', `unable to load file ${file}`);
      throw e;
    }

    const expectedFile = `./data/minors/${content.id}.js`;

    if (file !== expectedFile) {
      log(
        'error',
        `id ${content.id} does not match file name ${file}`
      );
    }

    content.grants
      .filter((g) => g.startsWith('stat'))
      .forEach((stat) => {
        let [, name] = stat.split(':');

        if (!stats[name]) {
          log('error', `[stat:${name}] does not exist in ${file}`);
        }
      });

    content.requirements.forEach((grant) => {
      let [type, name] = grant.split(':');

      if (type === 'domain' && domains.indexOf(name) === -1) {
        log('error', `[domain:${name}] does not exist in ${file}`);
      }

      if (type === 'race' && races.indexOf(name) === -1) {
        log('error', `[race:${name}] does not exist in ${file}`);
      }

      if (type === 'class' && classes.indexOf(name) === -1) {
        log('error', `[class:${name}] does not exist in ${file}`);
      }
    });
  }
})();
