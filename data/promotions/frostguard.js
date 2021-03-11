export default {
  class: 'frostweaver',
  description:
    'Using ice and heavy armor to shield themselces makes this an incredibly tough and defensive wielder of magic.',
  enhances: {
    'power:freezing-blast': 'applies a crippling ice debuff',
    'power:shatter-storm': 'has a chance to spawn frost armor on hit',
    'power:volatile-ice-weave': 'inflicts a knockdown'
  },
  grants: [
    'proficiency:mail',
    'proficiency:plate',
    'mastery:frostcaster',
    'stat:health:1500',
    'stat:max-mana:150',
    'stat:ice-storage-cap:1'
  ],
  id: 'frostguard',
  name: 'Frostguard',
  tags: ['ranged', 'defense'],
  type: 'promotion',
  version: '6.500'
};
