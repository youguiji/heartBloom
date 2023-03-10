/*
 * @Description:
 * @Version:
 * @Autor: Austral
 * @Date: 2023-02-17 21:45:17
 * @LastEditors: Austral
 * @LastEditTime: 2023-03-06 16:25:50
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    // '@vue/standard'
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0,
    //'eqeqeq': false,
    "vue/valid-template-root": false,
    "spaced-comment": false,
    quotes: false,
    "eol-last": false,
    "key-spacing": false,
    "vue/valid-v-for": false,
    "vue/no-unused-vars": false,
    "vue/no-parsing-error": false,
  },
};
