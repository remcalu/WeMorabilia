module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'indent': ['error', 2]
  },
};
