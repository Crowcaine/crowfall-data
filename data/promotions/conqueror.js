export default {
  class: 'myrmidon',
  description:
    'Usually known for recklessness, this thoughtful warrior knows the key to winning a fight is to hamper and control your opponents.',
  enhances: {
    'power:berserk':
      'frees you from active crowd and grants crowd control immunity',
    'power:neck-slash': 'inflicts suppression.',
    'power:whirlwind':
      'confers immunity to crowd control while you channel'
  },
  id: 'conqueror',
  masteries: ['axe', 'mace'],
  name: 'Conqueror',
  stats: {
    'attack-control-intensity': 21,
    'attack-power': 100,
    'hard-control-intensity': 21,
    'movement-control-intensity': 21
  },
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.540'
};
