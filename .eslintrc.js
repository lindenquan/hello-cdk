module.exports = {
  env: {
    browser: false,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-new': 0,
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'never']
  }
}
