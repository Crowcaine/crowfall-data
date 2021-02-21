export default {
  description:
    'Agent Provocateurs are sneaky, well-hidden, and difficult to track. Sometimes they drop caltrops, sometimes they prefer a stink bomb, but no matter the method of deceit the intent is always done with mischief and stealth in mind.',
  grants: [
    'stat:movement-speed-damage:5',
    'stat:movement-speed-stealth:5',
    'power:caltrops',
    'power:lay-low'
  ],
  id: 'agent-provocateur',
  name: 'Agent Provacateur',
  requirements: ['race:guinecean', 'domain:shadow'],
  type: 'major',
  version: '6.400'
};
