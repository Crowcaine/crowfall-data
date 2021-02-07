export default {
  class: 'champion',
  description:
    'This well rounded pugilist excels at both dealing and mitigating damage.',
  enhances: {
    'power:leap':
      'Now heals you when used below 50% health, once every 90 seconds.',
    'power:whirling-pain': 'Now adds a Barrier when used.',
    'power:neck-breaker':
      'Now increases your Max Health by 1875 and heals you for 2350 Hitpoints, and applies a Root to targets.'
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
  version: '6.400.0'
};
