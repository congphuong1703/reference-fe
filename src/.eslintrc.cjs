module.exports = {
  env: {
    'es6': true,
    'browser': true
  },
  extends: ['eslint:recommended',
    'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  sourceType: "module",
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "indent": [
      "error",
      4
    ],
    'no-console': 'warn',
    'no-alert': 'error',
    camelcase: 'warn',
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'warn',
    'no-duplicate-imports': 'warn',
    'no-duplicate-case': 'warn',
    'no-unreachable': 'error',
    'default-case': 'warn',
    eqeqeq: 'warn',
    'no-empty': 'warn',
    'no-else-return': 'error'
  }
};