module.exports = {
  extends: ['standard'],

  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'react-native/react-native': true
  }
}
