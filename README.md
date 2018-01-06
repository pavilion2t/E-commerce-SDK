# E-commerce-SDK
* 1 为什么要模块化? 代码拆分细化文件难以管理 和 代码很长但是难以维护 的矛盾
* 2 模块化历程 同步CommonJS-异步AMD
* 3 import & export => 最终编译成CommonJS     
    ES6中的模块化和CommonJS的区别：    
    
    静态化，必须在顶部，不能使用条件语句，自动采用严格模式    
    [treeshaking](https://doc.webpack-china.org/guides/tree-shaking/#src/components/Sidebar/Sidebar.jsx)和编译优化，作用域提升         可以对CommonJS模块重新赋值，对ES6模块重新赋值编译器会报错   
    都可以改变对象内部的值，CommonJS是对模块的拷贝，ES6是对模块的引用
    
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
