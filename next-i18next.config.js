module.exports = {
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    domains: [
      // {
      //   domain: 'example.com',
      //   defaultLocale: 'en-US',
      // },
      // {
      //   domain: 'example.nl',
      //   defaultLocale: 'nl-NL',
      // },
      // {
      //   domain: 'example.fr',
      //   defaultLocale: 'fr',
      //   http: true,
      // },
    ]
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}
