export default {
  class: 'duelist',
  description:
    'A master of pistols who enhances their powers when dealing critical strikes.',
  enhances: {
    'power:flinlock-shot':
      'Now generates an additional pip when used and has a chance to have its cooldown reset when using basic saber attacks and pistol shots.',
    'power:keen-guard':
      'Now adds a 1% critical strike and 3 critical damage buff that scales with pips.',
    'power:peppershot-box': 'Now deals 50% more damage'
  },
  grants: [
    'mastery:pistol',
    'mastery:rapier',
    'stat:attack-power:100',
    'stat:ranged-distance:9'
  ],
  id: 'slayer',
  name: 'Slayer',
  tags: ['ranged'],
  type: 'promotion',
  version: '6.400'
};
