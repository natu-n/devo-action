module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': 'off',
        'prettier/prettier': [
            'error',
            {
                'singleQuote': true,
            },
        ],
        'linebreak-style': 'off',
    }
};