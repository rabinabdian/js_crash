const str = "HiHi*. The dog is running in the street. Alan, who is 18 years old, looking for the 5g mobile phone under the tree."
let re;
// re = /\w{4,5}/g;  // \w  Matches any word character (alphanumeric & underscore).
// // {4,5}   Match between 4 and 5 of the preceding token.
// const result = str.match(re)
// console.log(result)
/**[
  'HiHi',  'runni',
  'stree', 'Alan',
  'years', 'looki',
  'mobil', 'phone',
  'under', 'tree'
] */

// re = /[a-zA-Z]o/g;
// const result = str.match(re)
// console.log(result)  // [ 'do', 'ho', 'lo', 'fo', 'mo', 'ho' ]
/** */


// re = /[0-9]g/g;
// const result = str.match(re)
// console.log(result)  // [ '5g' ]

// re = /(t|T)he/g;
// const result = str.match(re)
// console.log(result)   // [ 'The', 'the', 'the', 'the' ]

// re = /(o|n){2,3}/g;
// const result = str.match(re)
// console.log(result)   // [ 'nn', 'oo', 'on' ]

// re = /(hi){2,3}/ig;
// const result = str.match(re)
// console.log(result)  // [ 'HiHi' ] 

// re = /^H/g;
// const result = str.match(re)
// console.log(result)   // [ 'H' ]

re = /\.$/g;

const result = str.match(re)
console.log(result)  // [ '.' ] 

