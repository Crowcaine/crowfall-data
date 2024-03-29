import glob from 'glob-promise';
import log from '../logger.mjs';

const powerGrantsSet = new Set();
const powerTypes = new Set([
  'passive',
  'instant',
  'toggle',
  'ground aimed',
  'hold channeled',
  'charged',
  '15 secs',
  '2 secs',
  'channeled'
]);
const targetTypes = new Set([
  'area',
  'behind caster',
  'cone',
  'group',
  'ground',
  'pbae',
  'ray',
  'rectangle',
  'reticle',
  'self',
  'sphere'
]);

(async () => {
  const talentFiles = await glob('./data/talents/**/*.js');
  const promotionFiles = await glob('./data/promotions/**/*.js');
  const majorFiles = await glob('./data/majors/**/*.js');
  const minorFiles = await glob('./data/minors/**/*.js');
  const classFiles = await glob('./data/classes/**/*.js');
  const racesFiles = await glob('./data/races/**/*.js');

  const allFilesWithGrants = [
    ...classFiles,
    ...racesFiles,
    ...talentFiles,
    ...majorFiles,
    ...minorFiles,
    ...promotionFiles
  ];

  // find all power grants in talents, majors and minors
  for (let file of allFilesWithGrants) {
    const content = (await import(`../../${file}`)).default;
    const powers = content.powers || [];

    if (powers.length) {
      powers.map((g) => powerGrantsSet.add(g));
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
  const stats = (await import(`../../data/stats/index.js`)).default;
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

    if (
      content.castType === 'passive' &&
      (content.costType || content.cost)
    ) {
      log(
        'error',
        `id ${content.id} in ${file} is a passive with a cost or costType`
      );
    }

    if (content.castType === 'passive' && content.target !== 'self') {
      log(
        'error',
        `id ${content.id} in ${file} is a passive with a target of ${content.target}`
      );
    }

    if (!powerTypes.has(content.castType)) {
      log(
        'error',
        `id ${content.id} in ${file} is a passive with an invalid cast type of ${content.castType}`
      );
    }

    if (!targetTypes.has(content.target)) {
      log(
        'error',
        `id ${content.id} in ${file} is a passive with an invalid target of ${content.target}`
      );
    }

    if (file !== expectedFile) {
      log(
        'error',
        `id ${content.id} does not match file name ${file}`
      );
    }

    const description = content.description
      .split(/\[(stat:.*?:.*?)\]/g)
      .map((snip) => {
        const [, stat, value] = /stat:(.*):(.*)/.exec(snip) || [];

        if (stat && !stats[stat]) {
          log(
            'error',
            `stat ${stat} for ${content.id} does not existing stats`
          );
        }
      });
  }
})();
