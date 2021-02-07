export default {
  class: 'cleric',
  description:
    'Possessing the pinnacle of healing and defense capabilities, this holy warrior is akey member of any realm.',
  enhances: {
    'power:holy-symbol':
      'Now increases Critical Heal Chance and Critical Heal Amount for you and allies.',
    'power:illuminate':
      'Transforms the heal into a Heal Over Time and increases the amount of healing done.',
    'power:flash-of-light':
      'Now heals allies adjacent to the enemy target.'
  },
  grants: [
    'proficiency:plate',
    'mastery:mace',
    'mastery:buckler',
    'mastery:medium-shield',
    'stat:support-power:400',
    'stat:max-mana:300'
  ],
  id: 'crusader',
  name: 'Crusader',
  tags: ['healing'],
  type: 'promotion',
  version: '6.400'
};
