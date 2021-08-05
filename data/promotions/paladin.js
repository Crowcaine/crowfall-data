export default {
  class: 'templar',
  description:
    'This well-armored holy warrior excels at healing their allies.',
  enhances: {
    'power:devotion':
      'scales with support power, cleanses and prevents all damage over time effects for a short time',
    'power:divine-light':
      'no longer drains your Righteousness to heal but inflicts no damage',
    'power:holy-warrior': 'heals the group member with lowest health'
  },
  id: 'paladin',
  masteries: ['great-sword'],
  name: 'Paladin',
  proficiencies: ['plate'],
  stats: {
    health: 400,
    'plate-decay-rate': 15,
    'support-power': 400
  },
  tags: ['healing'],
  type: 'promotion',
  version: '6.540'
};
