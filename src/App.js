import React from 'react'
import Form from './forms/form'
import Footer from './forms/footer' 
import logo from './assets/logo.png'
const App = () => {

  return (
    <>
      <div className='bg-white  w-full h-screen containerFull'>
        <div className=' gradient lg:flex w-full   justify-center headerContainer' >
      <img src={logo} alt="Logo" style={{width:'150px',}} className="img"/>
      <span className='text-white  font-light py-5 text-4xl  nameLogo'> | PERSPECTIVE GLOBAL DE MÉXICO</span>
        </div>
        <div className=' w-full px-8 flex justify-center'>
       <Form /> 
        </div>
      </div>
        <Footer className=''/>
      

                        </>
  )
}

export default App
