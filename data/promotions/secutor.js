export default {
  class: 'knight',
  description:
    'A stalwart defender who is master of fighting with all forms of shields',
  enhances: {
    'power:chain-attack':
      'resets the cooldown on [power:redirected-strikes] after a successful hit',
    'power:oath-of-will':
      'reduces the cost of maintaining block by 75% and causes you to no longer lose additional stamina when blocking big hits for 12 seconds',
    'power:pursuit': 'adds a barrier when activated'
  },
  id: 'secutor',
  masteries: [
    'axe',
    'buckler',
    'long-sword',
    'mace',
    'medium-shield',
    'short-sword',
    'tower-shield'
  ],
  name: 'Secutor',
  proficiencies: ['plate'],
  stats: {
    'control-defense': 30,
    health: 1500
  },
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.540'
};
