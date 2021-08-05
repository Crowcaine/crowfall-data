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
  id: 'dirge',
  masteries: ['pistol', 'rapier'],
  name: 'Dirge',
  proficiencies: ['mail', 'plate'],
  stats: {
    'attack-power': 150,
    'hard-control-intensity': 21,
    health: 1200
  },
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.540'
};
