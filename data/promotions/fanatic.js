export default {
  class: 'confessor',
  description:
    'Known for wild gestures and speaking in tongues, this devotee of fire only desires to set the unworthy ablaze before the strain of casting spells causes them to burn out.',
  enhances: {
    'power-hellfire-aura':
      'grants mana on enemy hit and has a larger radius',
    'power:fervor':
      'adds damage bonus to basic attacks for 12 seconds',
    'power:fire-tornadoes': 'hit enemies up to 4 times'
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
  version: '6.500'
};
