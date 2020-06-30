// var a = [];
// for (var i =0; i<10; i++){
//   a[i] = function(){
//     console.log(i)
//   }
// }
// a[6]()

// let tmp = 123;
// if(true){
//   console.log(tmp);
//   let tmp
// }

// let arr = [12, 34, 32, 89, 4]
// console.log(Math.min(...arr))

// var a = 10

// var obj = {
//   a: 20,
//   fn(){
//     setTimeout(()=>{
//       console.log(this.a)
//     },)
//   }
// }
// obj.fn() //20


var a = 10
var obj = {
  a: 20,
  fn(){
    setTimeout(function(){
      console.log(this)
      console.log(this.a)
    },0)
  }
}
obj.fn() 