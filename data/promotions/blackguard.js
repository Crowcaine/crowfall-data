export default {
  class: 'assassin',
  description:
    'This dweller of the darkness achives victory through outlasting their opponents, in every possible way.',
  enhances: {
    'power:backstab': 'adds a barrier when activated',
    'power:in-the-zone': 'has increased duration per pip spent',
    'power:kidney-shot': 'applies bleed to enemies'
  },
  grants: [
    'proficiency:mail',
    'mastery:axes',
    'mastery:dagger',
    'mastery:mace',
    'stat:health:1000'
  ],
  id: 'blackguard',
  name: 'Blackguard',
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.500'
};
