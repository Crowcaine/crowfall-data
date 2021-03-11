export default {
  class: 'ranger',
  description:
    'A stealthy lurker of the shadows focused solely on melee weapons and eliminating their victims with lethal traps.',
  enhances: {
    'power:concussive-trap': 'can be placed from stealth',
    'power:sweep':
      'applies a barrier and increases your [stat:movement-speed-in-combat] when activated',
    'power:twin-surge': 'deals more damage against bleeding targets'
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
  version: '6.500'
};
