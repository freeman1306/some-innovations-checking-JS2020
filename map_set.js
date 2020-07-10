const map = new Map(
    [['a', 1]]
)

// console.log(map.get('a'));

map.set('b', 2).set(NaN, 'Number').set(42, 'demo')
// console.log(map.get(NaN));
// console.log(map.has(42));
// map.delete('b')
// console.log(map.size);

console.log(map.keys())
console.log(map.entries())
console.log(map.values())


