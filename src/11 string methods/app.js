const firstName = 'alan'
const lastName = 'smith'
const sentence = 'Hello, I am Alan Smith'
const tags = 'javascript,javascript course,javascript tutorial'

let val;

val = firstName[2]
    //indexof
val = firstName.indexOf('a')
val = firstName.lastIndexOf('a')
val = firstName.indexOf('o')

//charAt()
val = firstName.charAt('1')

//last character,
val = lastName.charAt(lastName.length - 1)
    //substring
val = lastName.substring(0, 3)
val = lastName.substring(1, 3)


//slice 
val = lastName.slice(0, 3)
val = lastName.slice(1, 3)

//split
console.log('split')
val = tags.split(',')
console.log(val) // (3) ['javascript', 'javascript course', 'javascript tutorial']
    //replace
console.log('replace before')
console.log(sentence)
val = sentence.replace('Alan', 'John')
console.log('replace after')

console.log(val)
    //includes, test something inside the string.
val = sentence.includes('Mary') // false



console.log(val)