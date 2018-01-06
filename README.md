# E-commerce-SDK
* 1 为什么要模块化? 代码拆分细化文件难以管理 和 代码很长但是难以维护 的矛盾
* 2 模块化历程 同步CommonJS-异步AMD
* 3 import & export => 最终编译成CommonJS
    静态化，必须在顶部，不能使用条件语句，自动采用严格模式  
    [treeshaking](https://doc.webpack-china.org/guides/tree-shaking/#src/components/Sidebar/Sidebar.jsx)和编译优化，作用域提升
