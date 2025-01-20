import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <Header />
      <div className='flex flex-row h-screen gap-3 p-3'>
        <div className='border-4 w-1/3 flex items-center justify-center'>
            <h1>Content</h1>
        </div>
        <div className='border-4 w-2/3 flex items-center justify-center'>
            <h1>Content</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
