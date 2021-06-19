export default {
  castType: 'instant',
  cooldown: 24,
  cost: 2,
  costType: 'resource',
  description:
    'places a heal absorption shield on the target which absorbs incoming heals and applies a debuff that reduces incoming healing [stat:critical-healing-chance:20] by 20% for 30 seconds. Healing the target for 500 will remove the shield.\nIf the shield is not healed off within 30 seconds, it will explode dealing 242 nature damage to nearby enemies.',
  duration: 30,
  id: 'alter-reality',
  name: 'Alter Reality',
  range: 15,
  target: 'self',
  version: '6.540'
};
