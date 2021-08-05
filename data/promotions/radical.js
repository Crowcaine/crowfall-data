export default {
  class: 'cleric',
  description:
    'Unpopular with members of their order from sacrificing healing for more potent throwing hammers.',
  enhances: {
    'power:flash-of-light': 'transforms into [power:searing-light]',
    'power:holy-symbol':
      'no longer heals, but damages enemies instead',
    'power:illuminate':
      'increases critical chance with each hit until you score three critial hits'
  },
  id: 'radical',
  masteries: ['buckler', 'mace', 'throwing-hammer', 'medium-shield'],
  name: 'Radical',
  powers: ['searing-light'],
  proficiencies: ['throwing-hammer'],
  stats: {
    'attack-power': 150,
    'max-mana': 300
  },
  tags: ['ranged'],
  trays: ['ranged'],
  type: 'promotion',
  version: '6.540'
};
