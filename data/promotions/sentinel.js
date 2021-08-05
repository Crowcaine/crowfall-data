export default {
  class: 'knight',
  description:
    'A master tactician who controls opponents in the battlefield and has dedicated their life to mastering the mace.',
  enhances: {
    'power:chain-attack': 'applies a root',
    'power:noble-blood': 'applies a supress',
    'power:pursuit':
      'stuns the next target hit by a shield attack within the nest 8 seconds'
  },
  id: 'sentinel',
  masteries: [
    'axe',
    'buckler',
    'long-sword',
    'mace',
    'medium-shield',
    'short-sword',
    'plate'
  ],
  name: 'Sentinel',
  stats: {
    'hard-control-intensity': 18,
    health: 200,
    'movement-control-crowd': 18
  },
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.540'
};
