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
  id: 'fury',
  masteries: ['great-sword'],
  name: 'Fury',
  proficiencies: ['plate'],
  stats: {
    'attack-control-intensity': 21,
    'hard-control-intensity': 42,
    health: 400,
    'movement-control-intensity': 21,
    'plate-decay-rate': 15
  },
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.540'
};
