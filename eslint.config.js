const { ignores, configs } = require('@eduzz/eslint-config/react-native'); // React Native

/** @type import('eslint').Linter.Config[] */
module.exports = [...configs, { ignores: ignores() }];
