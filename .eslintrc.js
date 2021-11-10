module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [
          '.',
          './packages/mongodb-connection-module',
          './packages/links-module',
          './packages/api-gw',
        ],
      },
    ],
    'no-new': 'off',
  },
};
