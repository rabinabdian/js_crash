const str = "The dog is running in the street. Alan, who is 18 years old, looking for the dog under the tree."
let re
// re = /n+/g //one n or more n

// const result = str.match(re);
// console.log(result) // [ 'nn', 'n', 'n', 'n', 'n', 'n' ]
// re = /ni?/g // n or n with i 
// const result = str.match(re);
// console.log(result)
/**
 * [
  'n', 'ni', 'n',
  'n', 'n',  'n',
  'n'
]
 */
// re = /un*/g //* =  + ?
// const result = str.match(re);
// console.log(result) // [ 'unn', 'un' ]


// re = /.ee/g
// const result = str.match(re);
// console.log(result)    //   [ 'ree', 'ree' ]

// re = /\./g
// const result = str.match(re);
// console.log(result)    // [ '.', '.' ]


// re = /\w/g
// const result = str.match(re);
// console.log(result)

/**
 * [
  'T', 'h', 'e', 'd', 'o', 'g', 'i', 's', 'r', 'u',
  'n', 'n', 'i', 'n', 'g', 'i', 'n', 't', 'h', 'e',
  's', 't', 'r', 'e', 'e', 't', 'A', 'l', 'a', 'n',
  'w', 'h', 'o', 'i', 's', '1', '8', 'y', 'e', 'a',
  'r', 's', 'o', 'l', 'd', 'l', 'o', 'o', 'k', 'i',
  'n', 'g', 'f', 'o', 'r', 't', 'h', 'e', 'd', 'o',
  'g', 'u', 'n', 'd', 'e', 'r', 't', 'h', 'e', 't',
  'r', 'e', 'e'
]
 */





// re = /\d/g
// const result = str.match(re);
// console.log(result)     // [ '1', '8' ]



// re = /\s/g
// const result = str.match(re);
// console.log(result)    // count spaces
// https://regexr.com/3bvel
/**
 * [
  ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' '
]
 */


re = /\S/g   //  Matches any character that is not a whitespace character (spaces, tabs, line breaks).
const result = str.match(re);
console.log(result)
/**
 * [
  'T', 'h', 'e', 'd', 'o', 'g', 'i', 's', 'r', 'u',
  'n', 'n', 'i', 'n', 'g', 'i', 'n', 't', 'h', 'e',
  's', 't', 'r', 'e', 'e', 't', '.', 'A', 'l', 'a',
  'n', ',', 'w', 'h', 'o', 'i', 's', '1', '8', 'y',
  'e', 'a', 'r', 's', 'o', 'l', 'd', ',', 'l', 'o',
  'o', 'k', 'i', 'n', 'g', 'f', 'o', 'r', 't', 'h',
  'e', 'd', 'o', 'g', 'u', 'n', 'd', 'e', 'r', 't',
  'h', 'e', 't', 'r', 'e', 'e', '.'
]
 */

// const result = str.match(re);
// console.log(result)
/**
 * [
  'T', 'h', 'e', 'd', 'o', 'g', 'i', 's', 'r', 'u',
  'n', 'n', 'i', 'n', 'g', 'i', 'n', 't', 'h', 'e',
  's', 't', 'r', 'e', 'e', 't', '.', 'A', 'l', 'a',
  'n', ',', 'w', 'h', 'o', 'i', 's', '1', '8', 'y',
  'e', 'a', 'r', 's', 'o', 'l', 'd', ',', 'l', 'o',
  'o', 'k', 'i', 'n', 'g', 'f', 'o', 'r', 't', 'h',
  'e', 'd', 'o', 'g', 'u', 'n', 'd', 'e', 'r', 't',
  'h', 'e', 't', 'r', 'e', 'e', '.'
]
 * 
 */
