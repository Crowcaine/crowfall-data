export default {
  class: 'ranger',
  description:
    'A master of bows who can shoot whilst on the move and excels at bringing down enemies from afar.',
  enhances: {
    'power:concussive-trap':
      "Now reduces target's personal damage modifier.",
    'power:disengage':
      'Now grants a power damage bonus: ranged buff when used.',
    'power:rapid-fire':
      'Now shoots up to 10 arrows. Gain a critical strike buff for each non-critical hit.'
  },
  grants: [
    'mastery:recurve-bow',
    'mastery:compound-bow',
    'mastery:spellbound-bow',
    'proficiency:quiver',
    'proficiency:exotic-arrows',
    'proficiency:elemental-arrows',
    'stat:attack-power:100',
    'stat:ranged-distance:31',
    'stat:ranged-distance-cap:21'
  ],
  id: 'archer',
  name: 'Archer',
  tags: ['ranged'],
  type: 'promotion',
  version: '6.400'
};
