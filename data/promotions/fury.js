export default {
  class: 'templar',
  description:
    'Heavily armorde and control focused, do not get near this defender of the fire.',
  enhances: {
    'power:devotion':
      'cleanses crowd control effects on the group when cast',
    'power:divine-light': 'inflicts knockdown when deployed',
    'power:holy-warrior':
      'has an increased health buff, duration and adds slow to melee attacks'
  },
  grants: [
    'mastery:great-sword',
    'proficiency:plate',
    'stat:health:400',
    'stat:hard-control-intensity:42',
    'stat:attack-control-intensity:21',
    'stat:movement-control-intensity:21',
    'stat:plate-decay-rate:15'
  ],
  id: 'fury',
  name: 'Fury',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.400'
};
