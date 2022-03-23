(module.exports = {
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
}),
  {
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
    },
  }
  