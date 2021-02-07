export default {
  class: 'templar',
  description:
    'This well-armored holy warrior excels at healing their allies.',
  enhances: {
    'power:holy-warrior':
      'Now has reduced cooldown and heals lowest health in group.',
    'power:devotion':
      'Now scales with support power and cleanses all damage over time effects, granting a short immunity to those removed.',
    'power:divine-light':
      'No longer drains your righteousness to heal.'
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
  version: '6.400.0'
};
