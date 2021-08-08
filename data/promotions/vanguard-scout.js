export default {
  class: 'duelist',
  description:
    'Adapt yourself to launch a barrage of baffling attacks from stealth leaving only when ready to finish off your prey.',
  enhances: {
    'power:flintlock-shot':
      'increases movement speed for a duration when activated',
    'power:keen-guard':
      "has a chance to blinds enemies that hit you while it's active",
    'power:pepperbox-shot': 'inflicts stun on 5 pips spent'
  },
  id: 'vanguard-scout',
  masteries: ['pistol', 'rapier'],
  name: 'Vanguard Scout',
  stats: {
    'attack-power': 100,
    health: 750,
    'ranged-distance': 9,
    stealth: 15
  },
  tags: ['ranged', 'control'],
  type: 'promotion',
  version: '7.000'
};
