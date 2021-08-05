export default {
  description: '',
  id: 'sharpshooter',
  name: 'Sharpshooter',
  powers: ['binding-arrows', 'all-clear'],
  proficiencies: [
    'arrows',
    'compound-bow',
    'exotic-arrows',
    'quiver',
    'recurve-bow'
  ],
  requirements: [
    'class:assassin',
    'class:champion',
    'class:knight',
    'class:myrmidon',
    'class:ranger'
  ],
  slots: ['ranged', 'ammo'],
  stats: {
    'movement-speed-damage': 5,
    'ranged-distance': 5
  },
  trays: ['ranged'],
  type: 'major',
  version: '6.540'
};
