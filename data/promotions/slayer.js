export default {
  class: 'duelist',
  description:
    'Becomd a formidble master of pistols who enhances their powers with dangerous critical strikes.',
  enhances: {
    'power:flintlock-shot':
      'generates an additional pip when used and has a chance to have its cooldown reset when using basic saber attacks and pistol shots',
    'power:pepperbox-shot': 'deals 50% more damage',
    'power:rapid-shots':
      'has a chance to reset the cooldown on [power:flip-shot]when attacking targets with less than 50% health'
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
  version: '7.000'
};
