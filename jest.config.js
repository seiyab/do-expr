module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@$": "<rootDir>/src/index.ts",
  },
};
