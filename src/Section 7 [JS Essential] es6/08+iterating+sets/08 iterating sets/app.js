const set1 = new Set();
set1.add(5);
set1.add('another string');
set1.add(5);
set1.add({ name: 'Alan' });
let obj = { name: 'John' };
set1.add(obj)

// for (const [key, value] of set1.entries()) {
//     console.log(key)
// }

// set1.forEach(value => {
//     console.log(value)
// });

const arr = Array.from(set1);
console.log(arr)



