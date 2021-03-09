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
  grants: [
    'mastery:pistol',
    'mastery:rapier',
    'stat:attack-power:100',
    'stat:health:750',
    'stat:stealth:15',
    'stat:ranged-distance:9'
  ],
  id: 'vanguard-scout',
  name: 'Vanguard Scout',
  tags: ['melee'],
  type: 'promotion',
  version: '6.500'
};
