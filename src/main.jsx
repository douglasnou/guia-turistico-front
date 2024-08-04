import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GuideProvider } from './Components/Providers/GuideContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <GuideProvider>
        <App />
      </GuideProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
