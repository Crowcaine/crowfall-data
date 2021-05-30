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
  grants: [
    'tray:life',
    'proficiency:mystical-staff',
    'proficiency:mail',
    'mastery:mystical-staff',
    'power:essence-scram',
    'stat:attack-power:100',
    'stat:support-power:200',
    'stat:health:1500',
    'stat:basic-attack-damage:10'
  ],
  id: 'archdruid',
  name: 'Archdruid',
  tags: ['ranged', 'healing'],
  type: 'promotion',
  version: '6.530'
};
