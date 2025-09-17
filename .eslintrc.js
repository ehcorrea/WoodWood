module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': 'warn',
    'react/display-name': 'off',
    '@typescript-eslint/no-require-imports': 'off',
  },
};
