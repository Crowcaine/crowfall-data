export default {
  class: 'cleric',
  description:
    'Sacrificing damage and healing potential this maven of battle excels at controlling enemies',
  enhances: {
    'power:holy-symbol': 'applies a knockdown to enemies',
    'power:illuminate':
      'applies a 5% [stat:personal-healing-modifier] buff to the group and your basic attacks regenerate mana for 15 seconds',
    'power:tend-wounds':
      'has the duration of the heal over time increased to 16 seconds and applies a [stat:personal-healing-modifier] buff to you and your target for 10 seconds'
  },
  grants: [
    'proficiency:plate',
    'mastery:mace',
    'mastery:buckler',
    'mastery:medium-shield',
    'stat:health:250',
    'stat:support-power:250',
    'stat:max-mana:300',
    'stat:control-defense:10'
  ],
  id: 'arbiter',
  name: 'Arbiter',
  tags: ['healing'],
  type: 'promotion',
  version: '6.500'
};
