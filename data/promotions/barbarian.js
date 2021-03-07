export default {
  class: 'champion',
  description:
    'Controlling enemies will cause this brute to become even more powerful.',
  enhances: {
    'power:leap': 'applies a knockdown',
    'power:neck-breaker':
      'has its cost reduced to 300 and applies knockdown',
    'power:whirling-pain': 'applies slow then suppress'
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
  version: '6.500'
};
