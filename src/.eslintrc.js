module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'prettier/react',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
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
  },
};
