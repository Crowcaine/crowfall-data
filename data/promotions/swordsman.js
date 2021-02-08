export default {
  class: 'knight',
  description:
    'Forgoing heavier armor for superior damage, this master of blades has perfected the art of swordplay.',
  enhances: {
    'power:oath-of-will':
      'Now grants a 25% critical strike increase for 15s or until you crit 3 times.',
    'power:obliterate':
      'Now has a 100% critical strike chance for the bleed applied to it.',
    'power:pursuit': 'Now has a reduced cooldown.'
  },
  grants: [
    'mastery:axe',
    'mastery:long-sword',
    'mastery:mace',
    'mastery:short-sword',
    'mastery:buckler',
    'mastery:medium-shield',
    'stat:attack-power:200',
    'stat:health:200'
  ],
  id: 'swordsman',
  name: 'Swordsman',
  tags: ['melee'],
  type: 'promotion',
  version: '6.400'
};
