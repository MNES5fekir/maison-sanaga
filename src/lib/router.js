import { useEffect, useState } from 'react'

// Routage par hash (#/produit/...) : aucune configuration côté hébergeur.
function parseHash() {
  const [path, query] = window.location.hash.replace(/^#/, '').split('?')
  return { path: path || '/', params: new URLSearchParams(query) }
}

export function useRoute() {
  const [route, setRoute] = useState(parseHash)
  useEffect(() => {
    const onChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export const navigate = (path) => {
  window.location.hash = path
}
