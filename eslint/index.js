// Descartes Labs JS Style Guide

module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    parser: "babel-eslint",
    plugins: [
        "react"
    ],
    rules: {
        "eol-last": "error",
        "indent": ["error", 4],
        "max-len": ["off", 80],
        "no-tabs": "error",
        "no-multiple-empty-lines": ["error", {
            max: 2,
            maxEOF: 1
        }],

        "array-bracket-spacing": ["off"],
        "arrow-body-style": ["off"],
        "arrow-parens": ["error", "as-needed"],
        "block-spacing": ["error"],
        "brace-style": ["error", "1tbs", {
            allowSingleLine: true
        }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-style": ["error", "last"],
        "dot-notation": ["off"],
        "key-spacing": ["off"],
        "quotes": ["error", "single", {
            avoidEscape: true,
        }],
        "quote-props": ["error", "consistent-as-needed"],

        "allowNamedFunctions": "off",
        "consistent-return": ["error"],
        "func-names": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "prefer-arrow-callback": ["off"],
        "no-plusplus": ["off"],
        "no-prototype-builtins": ["off"],
        "no-underscore-dangle": ["off"],
        "no-unused-vars": ["error", {
            "argsIgnorePattern": "^_",
        }],
        "no-use-before-define": ["error", "nofunc"],

        "import/no-unresolved": ["off"],
        "react/forbid-prop-types": ["error", {
            forbid: ["any"]
        }],
        "react/jsx-boolean-value": ["warn", "always"],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/require-extension": ["off"],
        "react/sort-prop-types": ["error", {
            callbacksLast: true,
            ignoreCase: true,
            requiredFirst: true
        }],
    },
};
