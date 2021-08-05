export default {
  class: 'druid',
  description:
    'With a single-minded focus of healing and resource regeneration, the chosen of Gaea are welcome by all.',
  enhances: {
    'power:bark-skin':
      'heals you when cast and heals again if the barrier is broken',
    'power:blight':
      'heals any friendlies in an area with a chance to spawn healing orbs for each ally healed',
    'power:grasping-roots': 'spawns healing orbs for every enemy hit'
  },
  id: 'earthkeeper',
  masteries: ['mystical-staff'],
  name: 'Earthkeeper',
  powers: ['essence-scram'],
  proficiencies: ['mystical-staff', 'mail'],
  stats: {
    'critical-healing-chance': 5,
    'support-power': 400
  },
  tags: ['healing'],
  trays: ['life'],
  type: 'promotion',
  version: '6.540'
};
