import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './index.css'

//main will be the parent of App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <main className="bg-slate-200 min-h-screen flex flex-col p-4">
    <Nav />
      <App />
      <Footer />
    </main>
   
  </React.StrictMode>,
)
