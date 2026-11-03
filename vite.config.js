import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ordersEnabled, store } from './src/config.js'

// Génère le titre et les balises de partage et de référencement depuis config.js.
function siteMeta() {
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      const meta = (attrs) => ({ tag: 'meta', attrs, injectTo: 'head' })
      const tags = [
        meta({ name: 'description', content: store.description }),
        meta({ property: 'og:type', content: 'website' }),
        meta({ property: 'og:locale', content: 'fr_FR' }),
        meta({ property: 'og:site_name', content: store.name }),
        meta({ property: 'og:title', content: store.name }),
        meta({ property: 'og:description', content: store.description }),
      ]
      if (store.siteUrl) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${store.siteUrl}/` }, injectTo: 'head' },
          meta({ property: 'og:url', content: `${store.siteUrl}/` }),
          meta({ property: 'og:image', content: `${store.siteUrl}/og-image.jpg` }),
          meta({ name: 'twitter:card', content: 'summary_large_image' }),
        )
      }
      // Une boutique de démonstration ne doit pas apparaître dans les moteurs de recherche.
      if (!ordersEnabled) tags.push(meta({ name: 'robots', content: 'noindex' }))
      return { html: html.replace('%STORE_NAME%', store.name), tags }
    },
  }
}

export default defineConfig({
  // Chemins relatifs : le build fonctionne sur n'importe quel hébergeur statique.
  base: './',
  plugins: [react(), siteMeta()],
  server: { port: 5180, strictPort: true },
})
