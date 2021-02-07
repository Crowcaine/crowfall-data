import { domains, races, classes } from './enums.mjs';
import glob from 'glob-promise';
import log from '../logger.mjs';

(async () => {
  log('info', 'checking major data');
  const files = await glob('./data/majors/*.js');

  for (let file of files) {
    let content;

    try {
      content = (await import(`../../${file}`)).default;
    } catch (e) {
      log('error', `unable to load file ${file}`);
      throw e;
    }

    const expectedFile = `./data/majors/${content.id}.js`;

    if (file !== expectedFile) {
      log(
        'error',
        `id ${content.id} does not match file name ${file}`
      );
    }

    content.requirements.forEach((grant) => {
      let [type, name] = grant.split(':');

      if (['domain', 'race', 'class', 'all'].indexOf(type) === -1) {
        log('error', `invalid type ${type} in ${file}`);
      }

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
