module.exports = {
  "env": {
    "node": true,
    "es6": true,
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "class-methods-use-this": ["error"],
    "no-const-assign": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-undefined": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "function" },
    ],
    "prefer-arrow-callback": "error",
    // "prefer-const": "warn",
    "prefer-destructuring": ["error"],
    "semi": ["error", "always"],
    "sort-imports": "error",
    "strict": ["error"],
  }
};