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
  grants: [
    'mastery:great-sword',
    'proficiency:plate',
    'stat:support-power:400',
    'stat:health:400',
    'stat:plate-decay-rate:15'
  ],
  id: 'paladin',
  name: 'Paladin',
  tags: ['healing'],
  type: 'promotion',
  version: '6.500'
};
