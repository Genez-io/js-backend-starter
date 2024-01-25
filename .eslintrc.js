module.exports = {
  root: true,
  extends: "eslint:recommended",
  env: {
    node: true,
    es2021: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      legacyDecorators: true,
    },
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {},
};
