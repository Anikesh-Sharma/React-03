module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended' // This will run Prettier as an ESLint rule
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off'
    }
  }
