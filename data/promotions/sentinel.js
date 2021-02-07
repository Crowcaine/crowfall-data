export default {
  class: 'knight',
  description:
    'A master tactician who controls opponents in the battlefield and has dedicated their life to mastering the mace.',
  enhances: {
    'power:noble-blood': 'Now applies a supress.',
    'power:pursuit':
      'Now stuns the nest target hit by a shield attack within the nest 8 seconds.',
    'power:chain-attack': 'Now applies a root.'
  },
  grants: [
    'mastery:axe',
    'mastery:long-sword',
    'mastery:mace',
    'mastery:short-sword',
    'mastery:buckler',
    'mastery:medium-shield',
    'mastery:plate',
    'stat:health:200',
    'stat:hard-control-intensity:18',
    'stat:movement-control-crowd:18'
  ],
  id: 'sentinel',
  name: 'Sentinel',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.400.0'
};
