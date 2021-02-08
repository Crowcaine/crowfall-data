import glob from 'glob-promise';
import log from '../logger.mjs';

(async () => {
  log('info', 'checking powers data');
  const files = await glob('./data/powers/*.js');

  for (let file of files) {
    let content;

    try {
      content = (await import(`../../${file}`)).default;
    } catch (e) {
      console.log(file);
      log('error', `unable to load file ${file}`);
      throw e;
    }

    const expectedFile = `./data/powers/${content.id}.js`;

    if (file !== expectedFile) {
      log(
        'error',
        `id ${content.id} does not match file name ${file}`
      );
    }
  }
})();
