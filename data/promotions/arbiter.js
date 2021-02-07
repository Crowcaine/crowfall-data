export default {
  class: 'cleric',
  description:
    'Sacrificing damage and healing potential this maven of battle excels at controlling enemies.',
  enhances: {
    'power:holy-symbol': 'Now applies a Knockdown to enemies.',
    'power:illuminate':
      'Basic attacks regenerate mana for 15 seconds and applies a Healing Bonus buff to the group.',
    'power:flash-of-light':
      'Now also Blinds enemies with 7m of target, up to 4 additional targets and has a reduced cooldown.'
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
  version: '6.400'
};
