//解构

// let [a, b, c, d] = [1, 2, 3]

// console.log(a) // 1
// console.log(b) // 2
// console.log(c) // 3
// console.log(d) // undefined

// let [a, [b, [c, d, e], f]] = [1, [6, [2, 3], 4]]

// console.log(a) //1
// console.log(b) //6
// console.log(c) //2
// console.log(d) //3
// console.log(e) //undefined
// console.log(f) //4

let [a, b , c = 4] = [1, 2]

console.log(a ,b ,c)