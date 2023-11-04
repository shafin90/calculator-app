import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CalculatorContainer from './page/CalculatorContainer/CalculatorContainer.jsx'
import AuthProvider from './component/AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CalculatorContainer />
    </AuthProvider>
  </React.StrictMode>,
)
