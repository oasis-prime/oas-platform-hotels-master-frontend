module.exports = {
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    domains: []
  },
  // interpolation: {
  //   prefix: '{',
  //   suffix: '}'
  // },
  // localeStructure: '{lng}/{ns}',
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}
