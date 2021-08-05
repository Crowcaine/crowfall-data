export default {
  class: 'frostweaver',
  description:
    'So versed in magic they can coalesce it into powerful healing and defensive creations.',
  enhances: {
    'power:chill-out':
      'heals you and the group member with the lowest health',
    'power:cool-ice-weave': 'causes heals and cannot be flipped',
    'power:crystal-lance': 'causes healing based on damage inflicted',
    'power:frost-armor': 'heals allies on pick-up'
  },
  id: 'icecaller',
  masteries: ['frostcaster'],
  name: 'Icecaller',
  proficiencies: ['mail'],
  stats: {
    'ice-storage-cap': 1,
    'max-mana': 300,
    'support-power': 400
  },
  tags: ['healing'],
  type: 'promotion',
  version: '6.540'
};
