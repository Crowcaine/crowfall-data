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
  grants: [
    'proficiency:throwing-hammer',
    'mastery:throwing-hammer',
    'mastery:mace',
    'mastery:buckler',
    'mastery:medium-shield',
    'stat:attack-power:150',
    'stat:max-mana:300',
    'power:searing-light'
  ],
  id: 'radical',
  name: 'Radical',
  tags: ['ranged'],
  type: 'promotion',
  version: '6.500'
};
