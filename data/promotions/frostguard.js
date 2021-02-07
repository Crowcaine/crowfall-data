export default {
  class: 'frostweaver',
  description:
    'Using ice and heavy armor to shield themselces makes this an incredibly tough and defensive wielder of magic.',
  enhances: {
    'power:volatile-ice-weave': 'Now inflicts a knockdown.',
    'power:freezing-blast': 'Now applies a crippling ice debuff.',
    'power:shatter-storm':
      'Now has a chance to spawn frost armor on hit.'
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
  version: '6.400'
};
