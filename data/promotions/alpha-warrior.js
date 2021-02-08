export default {
  class: 'champion',
  description:
    'This terror fuels increased critical strikes with dominance gained from their powers.',
  enhances: {
    'power:leap': 'Now adds a point of Dominance.',
    'power:neck-breaker':
      'Now has its cost reduced to 250 and consumes Dominance to automatically land a Critical.',
    'power:whirling-pain': "Now reduces enemy's Anti-Critical Strike."
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
  version: '6.400'
};
