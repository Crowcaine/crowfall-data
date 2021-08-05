export default {
  class: 'assassin',
  description:
    'A dealer of death that focuses on ambushing and attacking enemies from behind.',
  enhances: {
    'power:backstab':
      'has reduced cooldown and is always treated as from behind regardless of your position',
    'power:in-the-zone': 'grants a Movement Speed increase.',
    'power:kidney-shot': 'adds a Barrier when used.'
  },
  id: 'cutthroat',
  masteries: ['axe', 'dagger', 'mace'],
  name: 'Cutthroat',
  stats: {
    'armor-penetration': 10,
    'attack-power': 200
  },
  tags: ['melee'],
  type: 'promotion',
  version: '6.540'
};
