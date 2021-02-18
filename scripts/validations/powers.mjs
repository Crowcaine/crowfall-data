import glob from 'glob-promise';
import log from '../logger.mjs';

const powerGrantsSet = new Set();

(async () => {
  const talentFiles = await glob('./data/talents/**/*.js');
  const majorFiles = await glob('./data/majors/**/*.js');
  const minorFiles = await glob('./data/minors/**/*.js');
  const classFiles = await glob('./data/classes/**/*.js');

  const allFilesWithGrants = [
    ...classFiles,
    ...talentFiles,
    ...majorFiles,
    ...minorFiles
  ];

  // find all power grants in talents, majors and minors
  for (let file of allFilesWithGrants) {
    const content = (await import(`../../${file}`)).default;
    const grants = content.grants
      .filter((name) => name.startsWith('power'))
      .map((p) => p.replace('power:', ''));

    if (grants.length) {
      grants.map((g) => powerGrantsSet.add(g));
    }
  }

  // find all combo powers
  const files = await glob('./data/powers/*.js');
  for (let file of files) {
    const content = (await import(`../../${file}`)).default;
    if (content.combo) {
      Object.values(content.combo).map((g) => powerGrantsSet.add(g));
    }
  }

  log('info', 'checking powers data');
  for (let file of files) {
    let content;

    try {
      content = (await import(`../../${file}`)).default;
    } catch (e) {
      log('error', `unable to load file ${file}`);
      throw e;
    }

    const expectedFile = `./data/powers/${content.id}.js`;

    if (!powerGrantsSet.has(content.id)) {
      log(
        'error',
        `id ${content.id} in ${file} does not match any ability in talents, majors or minors`
      );
    }

    if (file !== expectedFile) {
      log(
        'error',
        `id ${content.id} does not match file name ${file}`
      );
    }
  }
})();
