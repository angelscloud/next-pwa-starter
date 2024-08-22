module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['next', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'no-console': ['error', { allow: ['info', 'groupCollapsed', 'groupEnd', 'error'] }],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react/react-in-jsx-scope': 'off',
        'import/no-anonymous-default-export': 'off',
        'no-use-before-define': ['error', 'nofunc'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
