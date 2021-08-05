export default {
  class: 'ranger',
  description:
    'A master of bows who can shoot whilst on the move and excels at bringing down enemies from afar.',
  enhances: {
    'power:concussive-trap':
      "reduces target's personal damage modifier",
    'power:disengage':
      'grants a power damage bonus: ranged buff when used',
    'power:rapid-fire':
      'shoots up to 10 arrows and stacks a critical strike buff for each non-critical hit'
  },
  id: 'archer',
  masteries: ['compound-bow', 'recurve-bow', 'spellbound-bow'],
  name: 'Archer',
  proficiencies: ['exotic-arrows', 'quiver', 'elemental-arrows'],
  stats: {
    'attack-power': 100,
    'ranged-distance': 31,
    'ranged-distance-cap': 21
  },
  tags: ['ranged'],
  type: 'promotion',
  version: '6.540'
};
