module.exports = {
  "env": {
    "node": true,
    "es6": true,
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "rules": {
    "class-methods-use-this": ["error"],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always",
    }],
    "no-mixed-spaces-and-tabs": "error",
    "no-useless-return": "error",
    "object-curly-newline": ["error", "always"],
    "semi": ["error", "always"],
    "sort-imports": "error",
    "strict": ["error", "global"],
  }
};