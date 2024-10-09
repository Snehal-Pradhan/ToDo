import { useState } from 'react'
import TopBar from './components/TopBar'
import CustomButton from './components/CustomButton'
import InputPanel from './components/InputPanel'

function App() {

  return (
    <>
    <div className='bg-gradient-to-b from-emerald-950 to-emerald-800'>
    <TopBar/>
    <InputPanel/>
    </div>
    
    </>
  )
}

export default App
