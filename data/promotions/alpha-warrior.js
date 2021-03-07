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
  grants: [
    'mastery:great-axe',
    'mastery:great-mace',
    'stat:attack-power:200',
    'stat:health:200'
  ],
  id: 'alpha-warrior',
  name: 'Alpha Warrior',
  tags: ['melee'],
  type: 'promotion',
  version: '6.500'
};
