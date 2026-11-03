// localStorage peut être indisponible (navigation privée, données bloquées) :
// le site doit continuer à fonctionner sans lui.
export function readJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    return raw === null ? fallback : JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function writeJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Sans stockage, le panier vit simplement le temps de la visite.
  }
}
