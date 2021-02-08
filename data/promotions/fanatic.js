export default {
  class: 'confessor',
  description:
    'Known for wild gestures and speaking in tongues, this devotee of fire only desires to set the unworthy ablaze before the strain of casting spells causes them to burn out.',
  enhances: {
    'power-hellfire-aura':
      'Now with increased radius and grants a small amount of mana per enemy hit.',
    'power:fervor':
      'Now adds damage bonus to basic attacks for 12 seconds.',
    'power:fire-tornadoes': 'Now tornadoes hit 4 times per enemy hit.'
  },
  grants: [
    'mastery:book',
    'stat:attack-power:200',
    'stat:max-mana:150'
  ],
  id: 'fanatic',
  name: 'Fanatic',
  tags: ['ranged'],
  type: 'promotion',
  version: '6.400'
};
