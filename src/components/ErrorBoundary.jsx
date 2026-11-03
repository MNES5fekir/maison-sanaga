import { Component } from 'react'

// Évite une page blanche si un affichage échoue : le client peut recharger le site.
export default class ErrorBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <div className="section empty">
        <h1 className="page-title">Un problème est survenu</h1>
        <p>Votre panier est conservé. Rechargez la page pour continuer.</p>
        <button type="button" className="btn" onClick={() => window.location.reload()}>Recharger</button>
      </div>
    )
  }
}
