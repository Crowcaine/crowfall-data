export default {
  class: 'druid',
  description:
    'Balance upon the precipice of Life and Death magic, this master of nature can heal a group or set up devastating explosions with their orbs.',
  enhances: {
    'power:bark-skin':
      'Now increases the thorns damage by 20 and causes a small aoe when your barksin barriers are destroyed.',
    'power:blight':
      'Now converts heal orbs into exploding orbs that deal damage to nearby enemies when they explode.',
    'power:grasping-roots': 'Now applies blackmantle when used.'
  },
  grants: [
    'tray:life',
    'proficiency:mystical-staff',
    'proficiency:mail',
    'mastery:mystical-staff',
    'power:essence-scram',
    'stat:attack-power:100',
    'stat:support-power:100',
    'stat:health:1500',
    'stat:basic-attack-damage:10'
  ],
  id: 'archdruid',
  name: 'Archdruid',
  tags: ['ranged', 'healing'],
  type: 'promotion',
  version: '6.400'
};
