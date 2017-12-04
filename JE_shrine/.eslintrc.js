// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        //'indent': ['error', 4, { 'SwitchCase': 1 }],
        'indent': 0,
        // 'semi': ['error', 'always']
        'no-multi-spaces': 0,
        'no-trailing-spaces': 0,
        'eol-last': 0,
        'space-before-function-paren': 0,
        'space-before-blocks': 0,
        'no-trailing-spaces': 0,
        'no-unused-vars ': 0,
        'Strings must use singlequote ': 0,
        'Extra semicolon': 0,
    }
}