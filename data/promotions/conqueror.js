export default {
  class: 'myrmidon',
  description:
    'Usually known for recklessness, this thoughtful warrior knows the key to winning a fight is to hamper and control your opponents.',
  enhances: {
    'power:berserk':
      'Now escapes active crow control and grants crowd control immunity',
    'power:neck-slash': 'Now applies suppression.',
    'power:whirlwind': 'Now immune to crowd control while channeling.'
  },
  grants: [
    'mastery:axe',
    'mastery:mace',
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
