export default {
  class: 'ranger',
  description:
    'A well-rounded defender of the forest, good with both bows and one-handed weapons. Access to mail armor makes them sturdier than their leather-wearing counterparts.',
  enhances: {
    'power:concussive-trap':
      'grants a barrier when triggered (once every 5 seconds max) and has reduced cooldown',
    'power:disengage':
      'places a trap where you leapt from and resets the cooldown on Stake powers',
    'power:twin-surge': 'inflicts suppress on the 2nd attack'
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
  version: '6.500'
};
