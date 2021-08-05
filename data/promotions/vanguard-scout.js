export default {
  class: 'duelist',
  description:
    'Known for lurking in the shadows and leaving only to finish off a wounded target.',
  enhances: {
    'power:flinlock-shot':
      'increases movement speed for a duration when activated',
    'power:keen-guard':
      'has a chance to slow enemies that hit you while active',
    'power:peppershot-box': 'inflicts stun on 5 pips spent'
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
  tags: ['melee'],
  type: 'promotion',
  version: '6.540'
};
