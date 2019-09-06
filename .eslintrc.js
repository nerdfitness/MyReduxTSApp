module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  plugins: [
    "react",
    "react-native",
    "jest",
    "react-hooks",
    "prettier",
    "@typescript-eslint",
    "react-redux"
  ],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:react-redux/recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    "react-native/react-native": true
  },

  rules: {
    //'no-param-reassign': 0,
    "linebreak-style": 0,
    "no-use-before-define": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/destructuring-assignment": 0,
    "react-native/sort-styles": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/destructuring-assignment": 0,
    "no-underscore-dangle": 0,
    "import/named": 2,
    "react-native/no-raw-text": [
      2,
      {
        skip: ["H1", "H2", "H3", "Animated.Text"]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: "./"
      }
    ],
    "import/prefer-default-export": 0,
    "import/no-cycle": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"]
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowTypedFunctionExpressions: true }
    ],
    "@typescript-eslint/prefer-interface": 0,
    "@typescript-eslint/no-explicit-any": 0
  }
};
