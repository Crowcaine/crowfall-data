export default {
  class: 'myrmidon',
  description:
    'Tempering reckless abandon with caution, this fighter has the defenses to survive the worst battlefields.',
  enhances: {
    'power:berserk':
      'no longer heals with damage done but now heals all damage taken each second. Damage taken returns when Berserk ends in the form of a Crash. Crash damage can be mitigated by gaining a 10% mitigation buff each time you strike a bleeding target of by using Raging Bull. You gain a damage bonus after Berserk ends based on damage taken while Berserking.',
    'power:neck-slash': 'heals you when used on a bleeding target',
    'power:whirlwind': 'applies a barrier when activated'
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
  version: '6.500'
};
