export default {
  head: {
    titleTemplate: 'Nuxt HN | %s',
    meta: [
      { property: 'og:image', content: 'https://user-images.githubusercontent.com/904724/58238637-f189ca00-7d47-11e9-8213-ae072d7cd3aa.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@nuxt_js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://api.hnpwa.com' },
      { rel: 'preconnect', href: 'https://api.hnpwa.com' }
    ]
  },

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'Nuxt Hacker News',
    short_name: 'Nuxt HN',
    description: 'HackerNews clone built with Nuxt.js',
    theme_color: '#188269',
    start_url: '/news?stand_alone=1'
  },

  modules: [ '~/modules' ],

  axios: {
    baseURL: 'https://api.hnpwa.com/v0/'
  },

  plugins: [
    '~/plugins/filters'
  ],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  }
}
