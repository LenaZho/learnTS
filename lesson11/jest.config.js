module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  
  // Only look for tests in the jest directory
  testMatch: [
    '<rootDir>/jest/**/*.test.ts',
    '<rootDir>/jest/**/*.spec.ts'
  ],
  
  // Explicitly ignore mocha directory and node_modules
  testPathIgnorePatterns: [
    '<rootDir>/mocha/',
    '<rootDir>/node_modules/'
  ],
  
  // Transform node_modules packages that use ES modules
  transformIgnorePatterns: [
    'node_modules/(?!(chai)/)'
  ],
  
  // TypeScript transformation
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  
  // Coverage settings
  collectCoverageFrom: [
    'animals/**/*.ts',
    '!animals/index.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  
  // Module settings
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  
  // Timeout and setup
  testTimeout: 10000,
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  
  // Ensure we only process files in certain directories
  roots: ['<rootDir>/jest', '<rootDir>/animals']
};