export default {
  class: 'champion',
  description:
    'This terror fuels increased critical strikes with dominance gained from their powers.',
  enhances: {
    'power:leap': 'adds a point of Dominance and slows your target.',
    'power:neck-breaker':
      'has its cost reduced to 350 and consumes Dominance to critically strike.',
    'power:whirling-pain':
      "increases it's max targes to 7 and reduces reduces enemy's Anti-Critical Strike."
  },
  id: 'alpha-warrior',
  masteries: ['great-axe', 'great-mace'],
  name: 'Alpha Warrior',
  stats: {
    'attack-power': 200,
    health: 200
  },
  tags: ['melee'],
  type: 'promotion',
  version: '6.540'
};
