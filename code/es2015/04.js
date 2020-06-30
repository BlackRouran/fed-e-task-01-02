//模板字符串

let str = "hello world"

//您输入的字符串是:hello world,time:1593075934621
console.log(`您输入的字符串是:${str},time:${new Date().getTime()}`) 



let str2 = "hello world"

console.log(str2.includes('z')) //false
console.log(str2.includes('h')) //true


console.log(str2.startsWith("h")) //true
console.log(str2.startsWith("s")) //false
console.log(str2.endsWith("p")) //false
console.log(str2.endsWith("d")) //true

console.log(str2.repeat(3)) 

