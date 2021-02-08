import fse from 'fs-extra';
import glob from 'glob-promise';
import log from './logger.mjs';
import sortJson from 'sort-json';
import jsonToEsModule from 'json-to-es-module';

(async () => {
  const files = await glob('./data/**/*.js');

  for (let file of files) {
    let content;

    try {
      content = (await import(`../${file}`)).default;
    } catch (e) {
      log('error', `unable to load file ${file}`);
      throw e;
    }

    const output = jsonToEsModule(JSON.stringify(sortJson(content)));
    fse.writeFileSync(file, output, 'utf8');
  }
})();
