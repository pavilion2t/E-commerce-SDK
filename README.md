# E-commerce-SDK
### 1 为什么要模块化? 代码拆分细化文件难以管理 和 代码很长但是难以维护 的矛盾
###  2 模块化历程 同步CommonJS-异步AMD
###  3 import & export => 最终编译成CommonJS     
### ES6中的模块化和CommonJS的区别：    
* 静态化，必须在顶部，不能使用条件语句，自动采用严格模式    
* [treeshaking](https://doc.webpack-china.org/guides/tree-shaking/#src/components/Sidebar/Sidebar.jsx)和编译优化，作用域提升       * 可以对CommonJS模块重新赋值，对ES6模块重新赋值编译器会报错   
* 都可以改变对象内部的值，CommonJS是对模块的拷贝，ES6是对模块的引用
    
### Const & Let 
```
if(true) {
  var a = 1;
 }
 console.log(a) // 1
```
Const & Let 不存在变量提升，不允许重复声明
```
if(true) {
  let a = 1;
 }
 console.log(a)  // Uncaught ReferenceError: a is not defined
```

### Arrow Function
```
var f = v => v
var f = v => { return v }
var f = function(v) { return v }
// return object
var f = () => ({ a: 1})
// params
var f = (a,b,c) => console.log(a,b,c)
```
* this指向定义时所在的对象
* 不可以作为构造函数（不能使用new）
* 没有argumens对象
```
var o = {
  a: 1,
  f: function() { 
       setTimeout(function() { 
         console.log(this)
       }, 200)
   }
}
o.f() // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```
举个栗子：更改为箭头函数
```
var o = {
  a: 1,
  f: function() { 
       setTimeout(() => { 
         console.log(this)
       }, 200)
   }
}
o.f() // {a: 1, f: ƒ}
```
举个栗子：没有argumens对象
```
var f = (a, b) => console.log(arguments[0])
f(1 ,2) // Uncaught ReferenceError: arguments is not defined
```



