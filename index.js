const dragonEvents = [
    {type: 'attack', value: 12, target: 'player-dorkman'},
    {type: 'yawn', value: 40},
    {type: 'eat', target: 'horse'},
    {type: 'attack', value: 22, target: 'player-meowman'},
    {type: 'attack', value: 12, target: 'player-dorkman'},    
]
console.log(dragonEvents);

const totalDamageOnDorkman = dragonEvents
    .filter(event => event.type === 'attack' && event.target === 'player-dorkman')
    .map(event => event.value)
    // Parens needed since there are 2 arguments
    .reduce((prev, currentValue) => (prev || 0) + currentValue) 

console.log(totalDamageOnDorkman);