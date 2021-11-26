/* eslint-disable no-undef */
module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/*"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
