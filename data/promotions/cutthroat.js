export default {
  class: 'assassin',
  description:
    'A dealer of death that focuses on ambushing and attacking enemies from behind.',
  enhances: {
    'power:kidney-shot': 'Now adds a Barrier when used.',
    'power:in-the-zone': 'Now grants a Movement Speed increase.',
    'power:backstab':
      "Now counts as attacking from behind when used from any direction and it's cooldown reduced."
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
  version: '6.400.0'
};
