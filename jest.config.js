/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'node',
    testMatch: ["**/__test__/*.test.(js|mjs|cjs)"],
    testPathIgnorePatterns: [
        "<rootDir>/dist/*", 
        "<rootDir>/node_modules/*",
        "<rootDir>/config/*",
        "<rootDir>/docker/*",
        "<rootDir>/env/*"
    ]
};