const { createDefaultPreset } = require('ts-jest');

const tsJustTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
    testEnvironment: 'node',
    transform: {
        ...tsJustTransformCfg,
    },
    modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
}