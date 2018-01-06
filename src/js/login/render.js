const template = (opts = {}) => {
  return "<div>Hello</div>"
}

export default (conf = {}) => {
  conf.container.innerHTML = template(conf);
}
