export default {
  class: 'champion',
  description:
    'This well rounded pugilist excels at both dealing and mitigating damage',
  enhances: {
    'power:leap':
      'heals you when used below 50% health but only once every 90 seconds',
    'power:neck-breaker':
      'increases your [stat:health:1875] and heals you for 2350 hitpoints',
    'power:whirling-pain': 'adds a Barrier when used'
  },
  id: 'pit-fighter',
  masteries: ['great-axe', 'great-mace'],
  name: 'Pit Fighter',
  proficiencies: ['plate'],
  stats: {
    health: 450
  },
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.540'
};
