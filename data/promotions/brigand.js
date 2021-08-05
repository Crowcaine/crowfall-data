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
  id: 'brigand',
  masteries: ['axe', 'mace', 'recurve-bow', 'short-sword'],
  name: 'Brigand',
  stats: {
    'attack-power': 200
  },
  tags: ['melee'],
  trays: ['stealth', 'energy-regen-all'],
  type: 'promotion',
  version: '6.540'
};
