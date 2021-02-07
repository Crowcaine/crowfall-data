export default {
  class: 'ranger',
  description:
    'A well-rounded defender of the forest, good with both bows and one-handed weapons. Access to mail armor makes them sturdier than their leather-wearing counterparts.',
  enhances: {
    'power:twin-surge': 'Now second attack applies a suppress.',
    'power:concussive-trap':
      'Now has a reduced cooldown and grants a barrier when triggered.',
    'power:disengage':
      'Now also places a trap where you leapt from and rest the cooldown on stake powers.'
  },
  grants: [
    'mastery:recurve-bow',
    'mastery:axe',
    'mastery:mace',
    'mastery:short-sword',
    'proficiency:mail',
    'proficiency:quiver',
    'tray:energy-regen-all',
    'stat:attack-power:150',
    'stat:power-damage-trap: 20'
  ],
  id: 'warden',
  name: 'Warden',
  tags: ['melee', 'ranged', 'defense'],
  type: 'promotion',
  version: '6.400'
};
