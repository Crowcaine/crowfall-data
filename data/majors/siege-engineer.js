export default {
  description: '',
  grants: [
    'stat:health:500',
    'stat:resistance-physical:300',
    'power:shield-siege-engine',
    'power:bolster-siege-engine',
    'power:repair-siege-engine'
  ],
  id: 'siege-engineer',
  name: 'Siege Engineer',
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
  type: 'major',
  version: '6.400'
};
