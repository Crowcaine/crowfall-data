export default {
  class: 'templar',
  description:
    'Forgoing heavier armor for superior damage, this bladesman has increased damage based on their mastery of fire.',
  enhances: {
    'power:holy-warrior':
      'Now increases holy damage, and increases your movement speed in combat while active.',
    'power:judgement': 'Now reduces the pip cost for casting by 1.',
    'power:divine-light':
      'Now has increased damage and applie damnation, now only heals caster.'
  },
  grants: [
    'mastery:great-sword',
    'stat:attack-power:200',
    'stat:health:400'
  ],
  id: 'vindicator',
  name: 'Vindicator',
  tags: ['melee'],
  type: 'promotion',
  version: '6.400'
};
