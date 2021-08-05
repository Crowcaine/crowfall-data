export default {
  class: 'assassin',
  description:
    'A master of shadows who believes the key to winning is controlling targets so they never have a chance.',
  enhances: {
    'power:backstab': 'now causes Supress',
    'power:in-the-zone': 'has a chance to refund pips from attacks',
    'power:kidney-shot':
      'applies the Kiss of Death debuff to the targets which increases all incoming damage by 10% for 6 seconds'
  },
  id: 'vandal',
  masteries: ['axe', 'dagger', 'mace'],
  name: 'Vandal',
  stats: {
    'attack-power': 150,
    'damage-poison': 30,
    'damage-poison-cap': 10,
    'hard-crowd-control': 18,
    'movement-control-intensity': 18
  },
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.540'
};
