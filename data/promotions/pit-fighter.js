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
  grants: [
    'proficiency:plate',
    'mastery:great-axe',
    'mastery:great-mace',
    'stat:health:450'
  ],
  id: 'pit-fighter',
  name: 'Pit Fighter',
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.500'
};
