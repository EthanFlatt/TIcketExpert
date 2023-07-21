import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
 

  return (
    
      <div className= 'app-container'>
        <header>
          <Header/>
        </header>
        <main>
          <Main/>
        </main>
        <footer> 
          <Footer/>
        </footer>
      </div>
  )
}

export default App
