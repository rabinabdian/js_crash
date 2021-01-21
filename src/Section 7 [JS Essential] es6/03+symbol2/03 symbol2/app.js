let obj = {}
obj.prop1 = 'value1';
// console.log(obj);
const sym2 = Symbol('prop2');
const sym3 = Symbol('value3')
obj[sym2] = 'value2'
obj.prop3 = sym3;
for (const i in obj) {

    console.log(i, obj[i]);


}
console.log(JSON.stringify(obj))