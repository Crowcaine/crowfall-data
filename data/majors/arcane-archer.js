export default {
  description: '',
  id: 'arcane-archer',
  name: 'Arcane Archer',
  powers: ['arcane-arrow', 'arcane-barrier'],
  proficiencies: [
    'arrows',
    'elemental-arrows',
    'quiver',
    'recurve-bow',
    'spellbound-bow'
  ],
  requirements: ['class:assassin', 'class:myrmidon', 'class:ranger'],
  slots: ['ranged', 'ammo'],
  stats: {
    'movement-speed-damage': 5,
    'ranged-distance': 5
  },
  trays: ['ranged'],
  type: 'major',
  version: '6.540'
};
