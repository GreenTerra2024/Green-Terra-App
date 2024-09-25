import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  {CleaningData} from './CONTEXT/CleaningData.tsx' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CleaningData>
      <App />
    </CleaningData>
  </React.StrictMode>,
)
