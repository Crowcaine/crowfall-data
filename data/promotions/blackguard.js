export default {
  class: 'assassin',
  description:
    'Transform yourself into a darkness dweller who achieves victory through outlasting their opponents',
  enhances: {
    'power:backstab': 'adds a unique barrier when activated',
    'power:blur':
      'now makes you immune to Crowd Control while active',
    'power:garrote': 'now does AOE damage and Bleed application'
  },
  id: 'blackguard',
  masteries: ['axes', 'dagger', 'mace'],
  name: 'Blackguard',
  proficiencies: ['mail', 'plate'],
  stats: {
    health: 1000
  },
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '7.000'
};
