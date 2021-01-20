let re;
re = /hello/ig;
console.log(re.source)

//exec()
// const result = re.exec('Hello everyone')

// console.log(result) // [ 'Hello', index: 0, input: 'Hello everyone', groups: undefined ]
// console.log('result[0]')

// console.log(result[0]) // Hello
// console.log('result.index')

// console.log(result.index) // 0 
// console.log('result.input')

// console.log(result.input) // Hello everyone

//match()
// const string = 'Hello, everyone, Hello';
// const result = string.match(re)
// console.log(result)  // [ 'Hello', 'Hello' ]

//test()
// const result = re.test('Hello')
// console.log(result) // true 

//search()
// const string = 'Hi, Hello, Hello';
// const result = string.search(re)
// console.log(result)  //  4

//replace()
const string = 'Hi, Hello, Hello';
const result = string.replace(re, 'hey');
console.log(result)  // Hi, hey, hey
