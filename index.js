module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: { project: ["./tsconfig.json"] },
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: [".eslintrc.js", "**/dist/*", "**/coverage/*/", "**/node_modules/*"],
    rules: {
        "@typescript-eslint/ban-types": ["warn"],
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit",
                overrides: {
                    accessors: "explicit",
                    constructors: "off",
                    methods: "explicit",
                    properties: "explicit",
                    parameterProperties: "explicit"
                }
            }
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-explicit-any": "warn"
    }
};
