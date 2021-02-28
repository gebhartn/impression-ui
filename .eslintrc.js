module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['simple-import-sort', 'prettier'],
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        quotes: [2, 'single', { avoidEscape: true }],
        'simple-import-sort/imports': 'error',
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js'],
            rules: {
                'react/prop-types': 'off',
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
