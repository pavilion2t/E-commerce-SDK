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
// module.exports = login
