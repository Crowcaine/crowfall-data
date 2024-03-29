export default {
  class: 'cleric',
  description:
    'Possessing the pinnacle of healing and defense capabilities, this holy warrior is akey member of any realm.',
  enhances: {
    'power:flash-of-light':
      'heals allies adjacent to the enemy target',
    'power:holy-symbol':
      'increases [stat:critical-healing-chance] and [stat:critical-healing-amount] for you and allies',
    'power:illuminate':
      'becomes a more powerful healing over time ability'
  },
  id: 'crusader',
  masteries: ['buckler', 'mace', 'medium-shield'],
  name: 'Crusader',
  stats: {
    'max-mana': 300,
    'support-power': 400
  },
  tags: ['healing'],
  type: 'promotion',
  version: '6.540'
};
