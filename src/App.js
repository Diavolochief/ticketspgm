import React from 'react'
import Form from './forms/form'
import logo from './assets/logo.png'
const App = () => {

  return (
    <>
      <div className='bg-white  w-screen h-screen'>
        <div className=' bg-blue-300  w-screen ' >
      <img src={logo} alt="Logo" style={{width:'150px',marginLeft:'150px'}} className=" "/>
        </div>
        <div className='flex justify-center'>
       <Form/> 
        </div>
      </div>
    </>
  )
}

export default App
