/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  'extends': [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2023
  },
  rules: {
    'no-debugger': 'warn',
  }
}
