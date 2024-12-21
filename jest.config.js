module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "/dist/" // اضافه کردن پوشه dist به ignorePatterns
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testPathIgnorePatterns: ["/dist/", "/node_modules/"], // اطمینان از نادیده گرفتن پوشه dist و node_modules
};
