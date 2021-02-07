export default {
  class: 'confessor',
  description:
    'As fire can punish the wicked, it can also heal the faithful. While this wrshiper wields both forms of the flame, they rely on their healing to keep the faithful fighting.',
  enhances: {
    'power:fervor':
      'Now has a reduced cooldown and adds a group heal to those within 30m.',
    'power:fire-tornadoes':
      'Now tornadoes also heal friendly targets they hit.',
    'power-hellfire-aura':
      'Now heals allies within the radius. [power:fire-tornadoes] no longer consumes [power:hellfire-aura].'
  },
  grants: [
    'proficiency:mail',
    'mastery:book',
    'stat:support-power:400',
    'stat:max-mana:300'
  ],
  id: 'inquisitor',
  name: 'Inquisitor',
  tags: ['healing'],
  type: 'promotion',
  version: '6.400'
};
