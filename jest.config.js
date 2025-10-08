const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',

  // ✅ Ignore transformation of ESM packages except what we allow
  transformIgnorePatterns: [
    'node_modules/(?!(<your-whitelisted-packages-here>))',
  ],

  // ✅ Add this to stub out .css and similar imports if you have them
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}

module.exports = createJestConfig(customJestConfig)
