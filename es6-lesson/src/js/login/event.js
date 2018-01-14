import { fetchPost } from "../common/fetch";
import utils from "../common/utils";
import FormCheck from "../common/form-check";

const { domSelector: $ } = utils;
export default (opts) => {
  const $loginBtn = $("#login-btn");
  const $remember = $("#login-remember");
  const $clearAccount = $("#clear-account");
  const $clearPassword = $("#clear-password");
  const $account = $("#login-account");
  const $password = $("#login-password");
  const $error = $("#login-error");

  const formCheck = new FormCheck({ form: document.getElementById("login-form")});

  $loginBtn.onclick = async () => {
    $error.innerHTML = "";
    const checkResults = formCheck.check();
    if (!checkResults.length) {
      $loginBtn.setAttribut("disabled", "disabled");
      let remember = "0";
      if ($remember.getAttribute("checked")) {
        remember = "1"
      }
      let data = await fetchPost("/login", {
        account: $account.value,
        password: $password.value,
        remember: remember
      });
      if (data.code === 200) {
        alert("登陆成功");
        opts.success && opts.success();
      } else {
        $error.innerHTML = data.message;
      }
      $loginBtn.removeAttribute("disabled");
    } else {
      const name = checkResults[0].name;
      const type = checkResults[0].type;
      if (type === "present") {
        if (name === "account") {
          $error.innerHTML = "请填写你的用户名";
        }
        if (name === "password") {
          $error.innerHTML = "请填写你的密码";
        }
      }
    }
  };

  $clearAccount.onclick = () => {
    $account.value = "";
    $clearAccount.style.display = "none";
  };

  $account.oninput = () => {
    if ($account.value.length) {
      $clearAccount.style.display = "block";
    } else {
      $clearAccount.style.display = "none";
    }
    $error.innnerHTML = "";
  }

  $password.oninput = () => {
    $error.innerHTML = "";
  }
}
