export default {
  class: 'myrmidon',
  description:
    'Usually known for recklessness, this thoughtful warrior knows the key to winning a fight is to hamper and control your opponents.',
  enhances: {
    'power:whirlwind':
      'Now immune to crowd control while channeling.',
    'power:neck-slash': 'Now applies suppression.',
    'power:berserk':
      'Now escapes active crow control and grants crowd control immunity'
  },
  grants: [
    'mastery:axe',
    'mastery:mace',
    'stat:attack-power:150',
    'stat:attack-power:100',
    'stat:hard-control-intensity:21',
    'stat:movement-control-intensity:21',
    'stat:attack-control-intensity:21'
  ],
  id: 'conqueror',
  name: 'Conqueror',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.400'
};
