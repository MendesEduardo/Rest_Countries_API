import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './style/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
