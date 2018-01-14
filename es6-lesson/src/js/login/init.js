import "../common/polyfill";
import render from "./render";
import bindEvent from "./event";

const login = (opts = {}) => {
  var defaultOpts = {
    loginBtnText: "登录",
    accountPlaceHolder: "",
    accountLabel: "",
    passwordPlaceHolder: "",
    passwordLabel: "",
    verifyPlaceHolder: "",
    accountMax: "30",
    passwordMax: "30",
    showRemember: true,
    autocomplete: false,
  };
  var options = Object.assign(defaultOpts, opts);
  render(options);
  bindEvent(options);
}

export { login }
