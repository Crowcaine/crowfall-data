export default {
  class: 'duelist',
  description:
    'A master of pistols who enhances their powers when dealing critical strikes.',
  enhances: {
    'power:flinlock-shot':
      'generates an additional pip when used and has a chance to have its cooldown reset when using basic saber attacks and pistol shots',
    'power:keen-guard':
      'adds a 1% critical strike and 3% critical damage buff that scales with pips',
    'power:peppershot-box': 'deals 50% more damage'
  },
  id: 'slayer',
  masteries: ['pistol', 'rapier'],
  name: 'Slayer',
  stats: {
    'attack-power': 100,
    'ranged-distance': 9
  },
  tags: ['ranged'],
  type: 'promotion',
  version: '6.540'
};
