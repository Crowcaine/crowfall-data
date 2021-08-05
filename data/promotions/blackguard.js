export default {
  class: 'assassin',
  description:
    'This dweller of the darkness achives victory through outlasting their opponents, in every possible way.',
  enhances: {
    'power:backstab': 'adds a barrier when activated',
    'power:in-the-zone': 'has increased duration per pip spent',
    'power:kidney-shot': 'applies bleed to enemies'
  },
  id: 'blackguard',
  masteries: ['axes', 'dagger', 'mace'],
  name: 'Blackguard',
  proficiencies: ['mail'],
  stats: {
    health: 1000
  },
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.540'
};
