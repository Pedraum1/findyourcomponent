import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import Home from './Views/Home/Home'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>,
)
