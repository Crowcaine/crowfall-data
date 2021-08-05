export default {
  class: 'druid',
  description:
    'Balance upon the precipice of Life and Death magic, this master of nature can heal a group or set up devastating explosions with their orbs.',
  enhances: {
    'power:bark-skin':
      'causes damage in an area when your Barkskin barriers are destroyed and increases thorns damage by 20.',
    'power:blight':
      'converts heal orbs into exploding orbs that deal damage to nearby enemies',
    'power:grasping-roots': 'applies blackmantle'
  },
  id: 'archdruid',
  masteries: ['mystical-staff'],
  name: 'Archdruid',
  powers: ['essence-scram'],
  proficiencies: ['mystical-staff', 'mail'],
  stats: {
    'attack-power': 100,
    'basic-attack-damage': 10,
    health: 1500,
    'support-power': 200
  },
  tags: ['ranged', 'healing'],
  trays: ['life'],
  type: 'promotion',
  version: '6.540'
};
