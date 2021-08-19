export default {
  class: 'assassin',
  description:
    'Learn to be master of shadows who believes the key to winning is to control your target so they never have a chance.',
  enhances: {
    'power:backstab': 'now does more daamge to stunned targets',
    'power:kidney-shot':
      'now works against targets that are Blocking or Parrying',
    'power:recon': 'is now a targetted AOE power'
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
  version: '7.000'
};
