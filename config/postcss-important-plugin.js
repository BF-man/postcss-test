var postcss = require('postcss')

module.exports = postcss.plugin('postcss-important-plugin', function (opts) {
  opts = opts || {}
  // Work with options here
  return function (root, result) {
    root.replaceValues('ChuckNorris', { fast: 'ChuckNorris' }, string => {
      return '!important'
    })

    // let a = 1

    root.walkRules(function (rule) {
      rule.walkDecls('display', function (decl) {
        // debugging =)
        // if (a === 1) {
        //   result.warn('-------------------------------------------------');
        //   result.warn(rule, { node: rule });
        //   result.warn('-------------------------------------------------');
        // }
        // We work with each `decl` object here.
        if (decl.value === 'flex-column') {
          rule.append({
            prop: 'flex-direction',
            value: 'column'
          })
        }

        decl.value = 'flex'
      })
    })
  }
})