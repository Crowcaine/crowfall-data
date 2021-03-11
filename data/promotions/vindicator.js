export default {
  class: 'templar',
  description:
    'Forgoing heavier armor for superior damage, this bladesman has increased damage based on their mastery of fire.',
  enhances: {
    'power:divine-light':
      'has increased damage and applies Damnation but only heals you',
    'power:holy-warrior':
      'increases holy damage and your movement speed in combat while active',
    'power:judgement': 'activation cost is reduced by 1 Pip'
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
  version: '6.500'
};
