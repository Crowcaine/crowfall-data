export default {
  class: 'druid',
  description:
    'Eschewing the balance of nature for pure destruction, the acller of storm has one purpose.',
  enhances: {
    'power:blight':
      'Now spawns an electric field that deals periodic damage in an area.',
    'power:bark-skin':
      'Now is self only, the duration is increased and also debuffs electric mitigation of enemies that attack you.',
    'power:grasping-roots':
      'Now ensnared enemies take more elemental damage.'
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
  version: '6.400.0'
};
