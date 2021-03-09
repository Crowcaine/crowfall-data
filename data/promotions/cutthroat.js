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
  grants: [
    'mastery:axe',
    'mastery:dagger',
    'mastery:mace',
    'stat:armor-penetration:10',
    'stat:attack-power:200'
  ],
  id: 'cutthroat',
  name: 'Cutthroat',
  tags: ['melee'],
  type: 'promotion',
  version: '6.500'
};
