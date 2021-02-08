export default {
  class: 'duelist',
  description:
    'Heavily armored and control focused, this master of the foil is not to be trifled with.',
  enhances: {
    'power:flinlock-shot':
      'Now has increased damage against bleeding targets.',
    'power:keen-guard':
      'Now heals on activation that scales with pips and has reduced cooldown.',
    'power:peppershot-box':
      'On 5 pips spent this now roots and reduces targets piercing mitigation.'
  },
  grants: [
    'proficiency:mail',
    'proficiency:plate',
    'mastery:pistol',
    'mastery:rapier',
    'stat:attack-power:150',
    'stat:health:120',
    'stat:hard-control-intensity:21'
  ],
  id: 'dirge',
  name: 'Dirge',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.400'
};
