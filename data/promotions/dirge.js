export default {
  class: 'duelist',
  description:
    'Rise as a master of the foll who uses heavy armor and dark wit to control and dominate your hapless challengers.',
  enhances: {
    'power:flintlock-shot':
      'causes increased damage against bleeding targets',
    'power:keen-guard': 'has a reduced cooldown',
    'power:pepperbox-shot':
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
  version: '7.000'
};
