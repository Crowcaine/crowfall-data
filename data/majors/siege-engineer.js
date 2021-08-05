export default {
  description: '',
  id: 'siege-engineer',
  name: 'Siege Engineer',
  powers: [
    'bolster-siege-engine',
    'shield-siege-engine',
    'repair-siege-engine'
  ],
  requirements: [
    'class:assassin',
    'class:champion',
    'class:cleric',
    'class:confessor',
    'class:druid',
    'class:duelist',
    'class:frostweaver',
    'class:knight',
    'class:myrmidon',
    'class:ranger',
    'class:templar'
  ],
  stats: {
    health: 500,
    'resistance-physical': 300
  },
  type: 'major',
  version: '6.540'
};
