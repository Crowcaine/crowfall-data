export default {
  class: 'myrmidon',
  description:
    'A furious berserker who becomes deadlier when focusing their attention on bleeding opponents.',
  enhances: {
    'power:whirlwind':
      'Now grants a stacking buff per hit that increases fury regeneration and [power:whirlwind] damage.',
    'power:neck-slash':
      'Now enabled on [power:gore], [power:colossus-smash], [power:net-pull], and [power:cross-gashes] while berserking.',
    berserk:
      'No longer heals with damage done, now heals per second damage taken, deals all damage when crash happens. You cannot drop below 1 health. Gain damage bonus every second for damage dealt.'
  },
  grants: ['mastery:axe', 'mastery:mace', 'stat:attack-power:200'],
  id: 'titan',
  name: 'Titan',
  tags: ['melee'],
  type: 'promotion',
  version: '6.400'
};
