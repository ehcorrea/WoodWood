module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transformIgnorePatterns: [],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
