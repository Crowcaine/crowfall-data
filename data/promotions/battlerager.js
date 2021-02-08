export default {
  class: 'myrmidon',
  description:
    'Tempering reckless abandon with caution, this fighter has the defenses to survive the worst battlefields.',
  enhances: {
    'power:berserk':
      'No longer heals with damage done, now heals per second damage taken, deals all damage when crash happens. Striking a bleeding target grants a stacking 10% mitigation for 12 seconds for the crash. Gains damage bonus based on damage taken while berserking.',
    'power:neck-slash':
      'Now heals the Battlerager when used on a bleeding target.',
    'power:whirlwind': 'Now applies a barrier.'
  },
  grants: [
    'mastery:axe',
    'mastery:mace',
    'proficiency:plate',
    'stat:health:750',
    'stat:resistance-all:300'
  ],
  id: 'battlerager',
  name: 'Battlerager',
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.400'
};
