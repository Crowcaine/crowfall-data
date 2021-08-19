export default {
  class: 'assassin',
  description:
    'Become a dealer of death that focuses on ambushing and attacking enemies from behind.',
  enhances: {
    'power:backstab':
      'is now an execute when used against an Exposed target',
    'power:blinkstep':
      'now generates 1 pip when used on an Exposed target',
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
  version: '7.000'
};
