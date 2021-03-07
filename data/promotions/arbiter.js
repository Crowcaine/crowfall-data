export default {
  class: 'cleric',
  description:
    'Sacrificing damage and healing potential this maven of battle excels at controlling enemies',
  enhances: {
    'power:flash-of-light':
      'afflicts blindness on the target and up to 4 others within 7m and has a reduced cooldown',
    'power:holy-symbol': 'applies a Knockdown to enemies.',
    'power:illuminate':
      'applies a healing bonus buff to the group and basic attacks regenerate mana for 15 seconds'
  },
  grants: [
    'proficiency:plate',
    'mastery:mace',
    'mastery:buckler',
    'mastery:medium-shield',
    'stat:support-power:200',
    'stat:max-mana:300',
    'stat:hard-control-intensity:15',
    'stat:attack-control-intensity:15',
    'stat:movement-control-intensity:15'
  ],
  id: 'arbiter',
  name: 'Arbiter',
  tags: ['melee', 'control'],
  type: 'promotion',
  version: '6.500'
};
