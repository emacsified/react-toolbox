module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "max-len": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 1,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "prettier/prettier": 2,
  },
};
