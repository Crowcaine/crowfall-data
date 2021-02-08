export default {
  class: 'frostweaver',
  description:
    'So versed in magic they can coalesce it into powerful healing and defensive creations.',
  enhances: {
    'power:chill-out':
      'Now also heals you and the lowest health member of your group',
    'power:crystal-lance':
      'Now heals the icecaller for the damage done.',
    'power:frost-armor': 'Now heals the target when picked up.',
    'power:ice-weave': 'Now also heals and cannot be flipped.'
  },
  grants: [
    'proficiency:mail',
    'mastery:frostcaster',
    'stat:support-power:400',
    'stat:max-mana:300',
    'stat:ice-storage-cap:1'
  ],
  id: 'icecaller',
  name: 'Icecaller',
  tags: ['healing'],
  type: 'promotion',
  version: '6.400'
};
