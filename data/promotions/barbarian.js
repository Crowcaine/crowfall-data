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
  id: 'barbarian',
  masteries: ['great-axe', 'great-mace'],
  name: 'Barbarian',
  stats: {
    'attack-control-intensity': 21,
    'hard-control-intensity': 21,
    'movement-control-intensity': 21
  },
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.540'
};
