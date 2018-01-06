import "../common/polyfill.js"
import render from "./render.js"
import bindEvent from "./event.js"

const login = (opts = {}) => {
  const defaultOpts = {
    loginBtnText: "登 录"
  };
  const options = Object.assign(defaultOpts, opts);
  // merge 2 objs in es6, it can merge Symbol type
  // if pre_es6, using lodash or shallow copy, cann't merge Symbol type
  render(options);
  bindEvent(options);

}

export { login }
// diference between export & module.export 
// export default login  输出的是值的引用，所以不能直接输出1，一定是指向内部的变量
// module.exports = login  输出值的拷贝，可以直接输出1
