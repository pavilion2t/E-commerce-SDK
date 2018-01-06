const template = (opts = {}) => {
  // tips: delete autocomplete
  const autocompleteTpl = `
  <div>
    <input type="text"/>
    <input type="password"/>
  </div>`;
  const autocompleteAdapter = opts.autocomplete ? "" :  autocompleteTpl;
  const autocompleteValue = opts.autocomplete ? "on" : "off";
  // class define style, id define selectors  For better maintainance
  const tpl = `
    <div class="login-wrapper">
      <form id="login-form" onsubmit="return false">
        ${ autocompleteAdapter}
        <label class="login-account-wrapper">
          <span class="account-label"> ${opts.accountLabel} </span>
          <input
            id="login-account"
            type="text"
            name="account"
            placeholder="${opts.accountPlaceholder}"
            autocomplete= "${ autocompleteValue }">
        </label>
        <label class="login-account-wrapper">
          <span class="account-label"> ${opts.passwordLabel} </span>
          <input
            id="login-account"
            type="text"
            name="account"
            placeholder="${opts.passwordPlaceholder}"
            autocomplete= "${ autocompleteValue }">
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
