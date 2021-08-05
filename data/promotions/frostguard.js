export default {
  class: 'frostweaver',
  description:
    'Using ice and heavy armor to shield themselces makes this an incredibly tough and defensive wielder of magic.',
  enhances: {
    'power:freezing-blast': 'applies a crippling ice debuff',
    'power:shatter-storm': 'has a chance to spawn frost armor on hit',
    'power:volatile-ice-weave': 'inflicts a knockdown'
  },
  id: 'frostguard',
  masteries: ['frostcaster'],
  name: 'Frostguard',
  proficiencies: ['mail', 'plate'],
  stats: {
    health: 1500,
    'ice-storage-cap': 1,
    'max-mana': 150
  },
  tags: ['ranged', 'defense'],
  type: 'promotion',
  version: '6.540'
};
