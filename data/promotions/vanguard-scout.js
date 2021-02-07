export default {
  class: 'duelist',
  description:
    'Known for lurking in the shadows and leaving only to finish off a wounded target.',
  enhances: {
    'power:peppershot-box': 'Now inflicts stun on 5 pips spent.',
    'power:keen-guard':
      'Now has a chance to slow enemies that hit you while active.',
    'power:flinlock-shot':
      'Now increases movement speed for a duration when used.'
  },
  grants: [
    'mastery:pistol',
    'mastery:rapier',
    'stat:health:750',
    'stat:attack-power:100',
    'stat:health:750',
    'stat:stealth:15',
    'stat:ranged-distance:9'
  ],
  id: 'vanguard-scout',
  name: 'Vanguard Scout',
  tags: ['melee'],
  type: 'promotion',
  version: '6.400.0'
};
