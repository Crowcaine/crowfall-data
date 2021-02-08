export default {
  class: 'ranger',
  description:
    'A stealthy lurker of the shadows focused solely on melee weapons and eliminating their victims with lethal traps.',
  enhances: {
    'power:concussive-trap': 'Now can be placed from stealth.',
    'power:sweep':
      'Now applies a barrier and increases your movement speed in combat.',
    'power:twin-surge':
      'Now deals mroe damage against bleeding targets.'
  },
  grants: [
    'mastery:recurve-bow',
    'mastery:axe',
    'mastery:mace',
    'mastery:short-sword',
    'tray:stealth',
    'tray:energy-regen-all',
    'stat:attack-power:200'
  ],
  id: 'brigand',
  name: 'Brigand',
  tags: ['melee'],
  type: 'promotion',
  version: '6.400'
};
