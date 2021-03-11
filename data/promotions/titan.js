export default {
  class: 'myrmidon',
  description:
    'A furious berserker who becomes deadlier when focusing their attention on bleeding opponents.',
  enhances: {
    berserk:
      'adds a damage bonus each second damage done and you are healed each second based on damage you cause. You cannot drop below 1 health. All prevented damage returns when Berserk ends in the form of a Crash. The Crash can be mitigated by Pulverize or Raging Bull',
    'power:neck-slash':
      'becomes enabled after using [power:gore], [power:colossus-smash], [power:net-pull], and [power:cross-gashes] while berserking',
    'power:whirlwind':
      'causes increased damage and grants a stacking buff per hit increasing fury regeneration'
  },
  grants: ['mastery:axe', 'mastery:mace', 'stat:attack-power:200'],
  id: 'titan',
  name: 'Titan',
  tags: ['melee'],
  type: 'promotion',
  version: '6.500'
};
