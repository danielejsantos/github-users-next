module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "./next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./.babelrc" }],
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
