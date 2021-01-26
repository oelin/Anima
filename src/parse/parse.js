imports('./lex')
imports('./operator')


function name() {
  return pad(ident)
}


function list() {
  return some(expr, /^[/, ',', /^]/)
}


// helpers

function imports(path) {
  Object.assign(global, require(path))
}

function pad(parser) {
  skip(space)
  let node = parser()
  skip(space)

  return node
}
// todo...
