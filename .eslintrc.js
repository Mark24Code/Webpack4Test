module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'no-extra-semi': 0,
    'class-methods-use-this': 0,
    'no-mixed-operators': 0,
    'react/prefer-stateless-function': 0,
    'react/no-direct-mutation-state': 0,
    'padded-blocks': 0,
    'arrow-body-style': 0,
    'newline-after-var': 0,
    'no-return-assign': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 0,
    'react/display-name': 0,
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'import/named': 0,
    'no-confusing-arrow': 0,
    'react/no-did-mount-set-state': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 1,
  },
  "parserOptions": {
    "sourceType": "module"
  }
};
