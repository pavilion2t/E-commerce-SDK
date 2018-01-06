const template = (opts = {}) => {
  // class define style, id define selectors  For better maintainance
  const tpl = `
    <div class="login-wrapper">
      <form id="login-form" onsubmit="return false">
        <label class="login-account-wrapper">
          <span class="account-label"> ${opts.accountLabel} </span>
          <input
            id="login-account"
            type="text"
            name="account"
            placeholder="${opts.accountPlaceholder}">
        </label>
        <label class="login-account-wrapper">
          <span class="account-label"> ${opts.passwordLabel} </span>
          <input
            id="login-account"
            type="text"
            name="account"
            placeholder="${opts.passwordPlaceholder}">
        </label>
        <input id="login-btn" class="login-btn" type="submit" value="${opts.loginBtnText}"/>
      </form>
    </div>
  `
  return tpl
}

export default (conf = {}) => {
  conf.container.innerHTML = template(conf);
}
