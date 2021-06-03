module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  plugins: [
    'jsx-a11y',
    'react-hooks',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-return-assign': ['error', 'except-parens'],
    radix: 'off',
    'linebreak-style': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/default': ['error'],
    'import/named': ['error'],
    'import/namespace': ['error', { allowComputed: false }],
    'import/prefer-default-export': ['error'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [{
    files: ['**/*.spec.js'],
    rules: {
      camelcase: 'off',
      'prefer-arrow-callback': 'off',
      'func-names': 'off',
      'no-use-before-define': 'off',
      'no-param-reassign': 'off',
    },
    env: {
      jest: true,
    },
  }],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
