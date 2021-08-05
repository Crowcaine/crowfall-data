export default {
  description: '',
  id: 'archery',
  name: 'Archery',
  powers: ['all-clear'],
  proficiencies: ['arrows', 'recurve-bow'],
  requirements: [
    'class:assassin',
    'class:champion',
    'class:duelist',
    'class:knight',
    'class:myrmidon',
    'class:templar'
  ],
  slots: ['ranged', 'ammo'],
  stats: {
    'ranged-distance': 5
  },
  trays: ['ranged'],
  type: 'minor',
  version: '6.540'
};
