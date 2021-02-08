export default {
  class: 'cleric',
  description:
    'Unpopular with members of their order from sacrificing healing for more potent throwing hammers.',
  enhances: {
    'power:flash-of-light': 'Transforms into [power:searing-light].',
    'power:holy-symbol': 'Now no longer heals, but damages enemies.',
    'power:illuminate':
      'Now increases Critical Chance with each hit until you score three Critial hits.'
  },
  grants: [
    'proficiency:throwing-hammer',
    'mastery:throwing-hammer',
    'mastery:mace',
    'mastery:buckler',
    'mastery:medium-shield',
    'stat:attack-power:200',
    'stat:max-mana:300',
    'power:searing-light'
  ],
  id: 'radical',
  name: 'Radical',
  tags: ['ranged'],
  type: 'promotion',
  version: '6.400'
};
