

### ES2015

#### let和const

****

**基本用法**

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效。

```
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```

看下面的例子

```
for (let i =1; i<4;i++){
  
}

console.log(i); //i is not defined
```

如果用var 声明的话，此时应该是 i=4

```
for (var i =1; i<4;i++){
  
}

console.log(i); 4
```

**不存在声明提升**

使用var定义的变量会被提前声明在代码的顶部，但是使用let 声明的变量不存在提升

```
console.log(a);//undefined
var a = 1;

console.log(b); //Cannot access 'b' before initialization
let b = 2
```

**不允许重复声明**

使用let声明的变量，只可以声明一次

```
let a =1 ;
let a = 3; //Identifier 'a' has already been declared
```

**const用来声明一个常量**

const声明的变量如果是基础数据类型则值是不可变的，如果是引用数据类型，则保证该指针指向的空间不变，但是空间内的数据结构改变是不可控的，因此如果要把一个引用数据类型(对象或数组)定义成一个常量就要很小心了

```
const a = 4;
a =5; //Assignment to constant variable.



const a = {
  name: 2
}

// 修改属性是允许的，因为a这个指针指向的内存空间没变
a.name =3;
a.age = 45

console.log(a)
```

#### 数组解构

**基础用法**

从数组中提取值，按照对应位置对变量赋值，未被匹配到的值是 undefined

```
let [a, b, c, d] = [1, 2, 3]

console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(d) // undefined
```

只要等号两边的模式匹配都可以被解构，下面看一下 嵌套解构

```
let [a, [b, [c, d, e], f]] = [1, [6, [2, 3], 4]]

console.log(a) //1
console.log(b) //6
console.log(c) //2
console.log(d) //3
console.log(e) //undefined
console.log(f) //4
```

**默认值**

解构的时候可以给解构的变量赋一个初始值，当未匹配到时将把初始值赋给变量

```
let [a, b , c = 4] = [1, 2]

console.log(a ,b ,c) // 1 2 4
```
#### 对象的解构
**基本用法**
对象的解构和数组的解构不同，数组对应的是位置，对象的解构对应的是 变量名,只要变量名一致就可以正确解构

```
let {b, a} = { a: 1 , b: 2}

console.log(a ,b ) //1,2
```

对象解构的时候，左边是匹配模式，右边才是真正要赋值的，下面的例子中foo 是匹配模式，a才是要赋值的

```
let { foo : aa } = {foo: 2, fdd: 3}
console.log(aa) //3
```

#### 模板字符串

**基础用法**

es2015 提供了新的模板字符串 ,使用两个反引号包括，如果要传入变量则使用${}，花括号内可以写任何js表达式

```
let str = "hello world"

//您输入的字符串是:hello world,time:1593075934621
console.log(`您输入的字符串是:${str},time:${new Date().getTime()}`) 
```

#### 字符串新增方法

**includes()**

includes()方法返回一个布尔值，表示是否找到该字符串

```
let str2 = "hello world"

console.log(str2.includes('z')) //false
console.log(str2.includes('h')) //true
```

**startsWith(), endsWith() **

startsWith()返回布尔值，表示参数字符串是否在原字符串的头部，endsWith()返回布尔值，表示参数字符串是否在原字符串的尾部

```
console.log(str2.startsWith("h")) //true
console.log(str2.startsWith("s")) //false
console.log(str2.endsWith("p")) //false
console.log(str2.endsWith("d")) //true
```

**repeat()**

repeat()方法接收一个number类型的参数n,表示将一个字符串重复n次

```
let str2 = "hello world"

console.log(str2.repeat(3)) //hello worldhello worldhello world
```

#### 数值的扩展

**Number.isNaN()**

Number.isNaN() 用来检查一个数字的值是否是NAN 。

```
let a = NaN

console.log(a === NaN) //false

console.log(Number.isNaN(a)) // true
```

#### 函数的扩展

es6 允许我们给函数指定默认参数

```
function num(a, b = 3) {
  console.log(a + b)
}
num(1) //4
num(1, 2) //3
```

值得注意的是，默认参数必须放在实际传递参数的末尾

**rest参数**

ES6 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```
function num2 (...rest){
  console.log(rest)
}

num2(1, 2) //[1, 2]

num2(1, 2, 3, 4, 5) //[ 1, 2, 3, 4, 5 ]
```

#### 数组

**扩展运算符**

数组的 ...运算符用于将一个数组展开，这好比是 rest参数 的逆运算                     

```
const ary = [1, 2, 3, 4, 5, 6, 7]

console.log(...ary) // 1 2 3 4 5 6 7
```

实例： 求数组中的最大值

```
// es5 写法。apply null 表示调用对象为window
function max(ary){
  return Math.max.apply(null, ary)
}

console.log(max(ary))

// es6 
function max(ary){
  return Math.max(...ary)
}

console.log(max(ary))
```

**复制数组**

```
let ary2 = [...ary]

console.log(ary2) //[1, 2, 3, 4, 5, 6, 7]
```

**合并数组**

```
let ary3 = [2, 3, 4]
let ary4 = [4, 5, 7]

let ary5 = [...ary3, ...ary4]

console.log(ary5) /[ 2, 3, 4, 4, 5, 7 ]
```

**find()**

查找满足条件的第一个值，并返回，找不到返回undefined

```
console.log(ary3.find((item) => item == 3 )) //3
```

**includes()**

查找数组是否包含某个元素，返回一个 布尔值

```
console.log(ary3.includes(2)) //true
```

