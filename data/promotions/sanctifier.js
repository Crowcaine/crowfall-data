export default {
  class: 'confessor',
  description:
    "Their only desire is to witness the despair in nonbelievers's eyes, so this follwer of Arkon has cast aside the benefits of range to become incredibly defensive.  Confessor powers have their range reduced to 8m and their damage increased by 25%. Fire Tornadoes and Hellfire Blast have their range reduced to 20m.",
  enhances: {
    'power:fervor':
      'grants cc immunity, personal damage modifier and personal healing modifier. Nearby enemies are damage and have sin applied to them. Finally mitigations are no longer reduced but slashing, crushing and piercing resistances are increased',
    'power:fire-tornadoes':
      'apply a knockdown and no longer consume [hellfire-aura]',
    'power:hellfire-aura':
      'has increased damage and hits up 7 targets'
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
  version: '6.500'
};
