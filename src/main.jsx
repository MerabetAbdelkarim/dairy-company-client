import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Mycontextprovider } from './ctxapi/Mycontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Mycontextprovider>
          <App />
      </Mycontextprovider>
  </React.StrictMode>
)
