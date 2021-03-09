export default {
  class: 'druid',
  description:
    'With a single-minded focus of healing and resource regeneration, the chosen of Gaea are welcome by all.',
  enhances: {
    'power:bark-skin':
      'heals you when cast, plus heals if the barrier is broken',
    'power:blight':
      'heals any friendlies in an area with a chance to spawn healing orbs for each ally healed',
    'power:grasping-roots': 'spawns healing orbs for every enemy hit'
  },
  grants: [
    'tray:life',
    'proficiency:mystical-staff',
    'proficiency:mail',
    'mastery:mystical-staff',
    'power:essence-scram',
    'stat:support-power:400',
    'stat:critical-healing-chance:5'
  ],
  id: 'earthkeeper',
  name: 'Earthkeeper',
  tags: ['healing'],
  type: 'promotion',
  version: '6.500'
};
