import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import './components/App.scss'
import App from './components/App'
import Header from './components/Header/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
