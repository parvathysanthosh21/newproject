import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'

import {BrowserRouter} from 'react-router-dom'
import ContextShares from './ContextAPI/ContextShares.jsx'
import TokenAuth from './ContextAPI/TokenAuth.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<TokenAuth>
  
  <ContextShares>
      <BrowserRouter>  
      <App />   
      </BrowserRouter>
    
  </ContextShares> 
</TokenAuth>
 </StrictMode>,
)
