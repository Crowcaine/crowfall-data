export default {
  class: 'confessor',
  description:
    "Their only desire is to witness the despair in nonbelievers's eyes, so this follwer of Arkon has cast aside the benefits of range to become incredibly defensive.  Confessor powers have their range reduced to 8m and their damage increased by 25%. Fire Tornadoes and Hellfire Blast have their range reduced to 20m.",
  enhances: {
    'power-hellfire-aura':
      'Now has increased damage and hits up 7 targets. [power:fire-tornadoes] no longer consumes [hellfire-aura].',
    'power:fervor':
      'Now has a reduced cooldown, grants CC Immunity and increases slashing resist, crushing resist, piercing resist, personal damage modifier, personal healing modifier and no longer reduces mitigations while channeling. This also damages enemies near you, applying sin to them..',
    'power:fire-tornadoes': 'Now tornadoes apply a knowndown.'
  },
  grants: [
    'proficiency:mail',
    'proficiency:plate',
    'mastery:book',
    'stat:health:750',
    'stat:max-mana:450'
  ],
  id: 'sanctifier',
  name: 'Sanctifier',
  tags: ['melee', 'defense'],
  type: 'promotion',
  version: '6.400'
};
