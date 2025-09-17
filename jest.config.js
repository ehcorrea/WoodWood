module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
