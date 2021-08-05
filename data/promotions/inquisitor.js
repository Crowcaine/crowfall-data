export default {
  class: 'confessor',
  description:
    'As fire can punish the wicked, it can also heal the faithful. While this wrshiper wields both forms of the flame, they rely on their healing to keep the faithful fighting.',
  enhances: {
    'power-hellfire-aura': 'heals allies within the radius',
    'power:fervor':
      'gains a group heal with a 30m range and has reduced cooldown',
    'power:fire-tornadoes':
      'heals friendly targets and no longer consumes [power:hellfire-aura]'
  },
  id: 'inquisitor',
  masteries: ['book'],
  name: 'Inquisitor',
  proficiencies: ['mail'],
  stats: {
    'max-mana': 300,
    'support-power': 400
  },
  tags: ['healing'],
  type: 'promotion',
  version: '6.540'
};
