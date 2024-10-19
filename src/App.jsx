import React from 'react'
import Caraousal from './Components/Caraousal'
import Specialities from './Components/Specialities'

const App = () => {
  return (
    <div className='flex items-center justify-center min-h-[100vh] bg-[#ebe9e9] flex-col'>
      <Specialities />
      <Caraousal />
    </div>
  )
}

export default App  