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
  id: 'vindicator',
  masteries: ['great-sword'],
  name: 'Vindicator',
  stats: {
    'attack-power': 200,
    health: 400
  },
  tags: ['melee'],
  type: 'promotion',
  version: '6.540'
};
