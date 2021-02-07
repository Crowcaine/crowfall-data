export default {
  class: 'assassin',
  description:
    'This dweller of the darkness achives victory through outlasting their opponents, in every possible way.',
  enhances: {
    'power:kidney-shot': 'Now adds a Bleed when used',
    'power:in-the-zone': 'Now increases the duration per pip spent.',
    'power:backstab': 'Now adds a Barrier when used'
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
  version: '6.400.0'
};
