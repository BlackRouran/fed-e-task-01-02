//数组

const ary = [1, 2, 3, 4, 5, 6, 7]

// console.log(...ary) // 1 2 3 4 5 6 7

// function max(ary){
//   return Math.max.apply(null, ary)
// }

// console.log(max(ary))

// function max(ary){
//   return Math.max(...ary)
// }

// console.log(max(ary))

//赋值数组

// let ary2 = [...ary]

// console.log(ary2)

let ary3 = [2, 3, 4]
let ary4 = [4, 5, 7]

let ary5 = [...ary3, ...ary4]

// console.log(ary5)


console.log(ary3.find((item) => item == 3 )) //3

console.log(ary3.includes(2)) //true