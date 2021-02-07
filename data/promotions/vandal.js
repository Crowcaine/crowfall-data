export default {
  class: 'assassin',
  description:
    'A master of shadows who believes the key to winning is controlling targets so they never have a chance.',
  enhances: {
    'power:kidney-shot':
      'Now applies the Kiss of Death debuff to the target, increasing all incoming damage by 10% for 6 seconds.',
    'power:in-the-zone':
      'Now has a chance to refund pips on attacks.',
    'power:backstab': 'Now adds Supress'
  },
  grants: [
    'mastery:axe',
    'mastery:dagger',
    'mastery:mace',
    'stat:attack-power:150',
    'stat:damage-poison:30',
    'stat:damage-poison-cap:10',
    'stat:hard-crowd-control:18',
    'stat:movement-control-intensity:18'
  ],
  id: 'vandal',
  name: 'Vandal',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.400.0'
};
