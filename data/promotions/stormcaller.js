export default {
  class: 'druid',
  description:
    'Eschewing the balance of nature for pure destruction, the acller of storm has one purpose.',
  enhances: {
    'power:bark-skin':
      'becomes self only and reduces the electric mitigation of enemies attacking you',
    'power:blight':
      'creates an electric field that deals periodic damage in an area',
    'power:grasping-roots':
      'increasaes elemental damage taken by ensnared enemies'
  },
  grants: [
    'proficiency:buckler',
    'mastery:buckler',
    'mastery:buckler',
    'stat:attack-power:200'
  ],
  id: 'stormcaller',
  name: 'Stormcaller',
  tags: ['ranged'],
  type: 'promotion',
  version: '6.500'
};
