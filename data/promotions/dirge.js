export default {
  class: 'duelist',
  description:
    'Heavily armored and control focused, this master of the foil is not to be trifled with.',
  enhances: {
    'power:flinlock-shot':
      'causes increased damage against bleeding targets',
    'power:keen-guard':
      'also heals on activation scaling with pips and has reduced cooldown',
    'power:peppershot-box':
      'applies root and reduces enemy piercing when activated with five pips'
  },
  grants: [
    'proficiency:mail',
    'proficiency:plate',
    'mastery:pistol',
    'mastery:rapier',
    'stat:attack-power:150',
    'stat:health:1200',
    'stat:hard-control-intensity:21'
  ],
  id: 'dirge',
  name: 'Dirge',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.500'
};
