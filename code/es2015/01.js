/* 
  let和const
  1.let 不存在变量提升 
  2.let 声明的变量存在块级作用域
*/

// let 不存在声明提升


// for (var i =1; i<4;i++){
  
// }

// console.log(i); 4

// let a =1 ;
// let a = 3; //Identifier 'a' has already been declared


const a = {
  name: 2
}
a.name =3;
a.age = 45

console.log(a)
