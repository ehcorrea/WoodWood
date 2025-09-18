module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.svg$': '<rootDir>/src/test/__mocks__/svg.js',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|@react-navigation)',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/store/**',
    '!src/**/stores/**',
    '!src/**/@types/**',
    '!src/**/types/**',
    '!src/app/**',
    '!src/assets/**',
    '!src/navigators/**',
    '!src/services/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
