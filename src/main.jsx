import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //App k render krne k liye createRoot method use kr rhe hai. App k root e rake.

  <StrictMode>
    <App />
  </StrictMode>,
)
