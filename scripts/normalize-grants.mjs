import fse from 'fs-extra';
import glob from 'glob-promise';
import jsonToEsModule from 'json-to-es-module';
import sortJson from 'sort-json';
import log from './logger.mjs';

const grantMap = {
  mastery: 'masteries',
  power: 'powers',
  proficiency: 'proficiencies',
  slot: 'slots',
  stat: 'stats',
  tray: 'trays'
};

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

    if (content.grants) {
      content.grants.forEach((token) => {
        const [type, id, val] = token.split(':');
        const mappedType = grantMap[type];
        const contentGrantOfType = content[mappedType];

        if (val) {
          content[mappedType] = {
            ...(contentGrantOfType || {}),
            [id]: Number(val)
          }
        } else {
          content[mappedType] = [
            ...(contentGrantOfType || []).sort(),
            id
          ]
        }
      });

      delete content.grants;

      if (file.includes('talents')) {
        content.type = 'talent';
      }
    }


    const output = jsonToEsModule(JSON.stringify(sortJson(content)));
    fse.writeFileSync(file, output, 'utf8');
  }
})();
