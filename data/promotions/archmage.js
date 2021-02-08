export default {
  class: 'frostweaver',
  description:
    'Some want to see the world burn, this master of magic wants to the freeze the world. And then explode it.',
  enhances: {
    'power:crystal-lance':
      'Now reduces the cooldown and causes execute damage to targets under 45% health.',
    'power:shatter-storm': 'Now spawns volatile ice on hit.',
    'power:volatile-ice-weave':
      'Now halves the time it takes to explode and reduces the enemys anti-critical strike.'
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
  version: '6.400'
};
