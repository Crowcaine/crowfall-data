export default {
  class: 'knight',
  description:
    'A stalwart defender who is master of fighting with all forms of shields',
  enhances: {
    'power:oath-of-will':
      'Now reduces the cost of maintaining block by 75% and causes you to no longer lose additional stamina when blocking big hits for 12 seconds.',
    'power:pursuit': 'Now adds a barrier.',
    'power:chain-attack':
      'Now resets the cooldown on [power:redirected-strikes] after a successful hit.'
  },
  grants: [
    'mastery:axe',
    'mastery:long-sword',
    'mastery:mace',
    'mastery:short-sword',
    'mastery:buckler',
    'mastery:medium-shield',
    'mastery:tower-shield',
    'proficiency:plate',
    'stat:health:1500',
    'stat:control-defense:30'
  ],
  id: 'secutor',
  name: 'Secutor',
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.400'
};
