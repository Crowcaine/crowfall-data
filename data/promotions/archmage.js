export default {
  class: 'frostweaver',
  description:
    'Some want to see the world burn, this master of magic wants to the freeze the world. And then explode it.',
  enhances: {
    'power:crystal-lance':
      'causes execution scale damage to targets under 45% health and has reduced cooldown',
    'power:shatter-storm': 'spawns Volatile Ice on hit.',
    'power:volatile-ice-weave':
      "explodes twice as fast reduces the enemy's anti-critical strike."
  },
  grants: [
    'mastery:frostcaster',
    'stat:attack-power:200',
    'stat:max-mana:150',
    'stat:ice-storage-cap:1'
  ],
  id: 'archmage',
  name: 'Archmage',
  tags: ['ranged'],
  type: 'promotion',
  version: '6.500'
};
