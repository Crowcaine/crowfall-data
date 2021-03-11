export default {
  class: 'knight',
  description:
    'Forgoing heavier armor for superior damage, this master of blades has perfected the art of swordplay.',
  enhances: {
    'power:oath-of-will':
      'grants a 25% critical strike increase for 15s or until you crit three times',
    'power:obliterate':
      'inflicts bleed with a 100% chance to critically strike',
    'power:pursuit': 'has a reduced cooldown'
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
  version: '6.500'
};
