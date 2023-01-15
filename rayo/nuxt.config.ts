export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1',
        title: 'Rayo',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'description', content: 'My amazing site.' }
        ],
      }
    }
  })
  