export default {
  class: 'champion',
  description:
    'Controlling enemies will cause this brute to become even more powerful.',
  enhances: {
    'power:leap': 'Now applies a Knockdown.',
    'power:neck-breaker':
      'Now has cost reduced to 300 and applies Knockdown',
    'power:whirling-pain': 'Now applies Slow then Suppress.'
  },
  grants: [
    'mastery:great-axe',
    'mastery:great-mace',
    'stat:hard-control-intensity:21',
    'stat:movement-control-intensity:21',
    'stat:attack-control-intensity:21'
  ],
  id: 'barbarian',
  name: 'Barbarian',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.400'
};
