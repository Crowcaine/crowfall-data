export default {
  castType: 'passive',
  description:
    'increases your [stat:healing:5] by 5%.\n\nWhenever you gain Essence while in the life tray, and your total essence is greater than 500, you will commune with nature. Commune with Nature reduces your essence by 500 and applies a resource restoration to all group members within 30m of you.\n\nTriggering this effect will cause Nature Languor, which will prevent you from triggering this effect for 45 seconds.',
  id: 'commune-with-nature',
  name: 'Commune With Nature',
  radius: 30,
  target: 'self',
  version: '6.530'
};
