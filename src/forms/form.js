import React, { useState, useEffect } from 'react'
import ListPicker from 'react-list-picker'
import axios from 'axios'

const Form = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
  
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const myOptions = ["Meat Lover", "Veggie Heaven", "Hawaii-5-0", "Inferno"];

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <>
            <h1>Formulario</h1>
            <div className='flex justify-center'>
                <form className="row" onSubmit={enviarDatos}>
                    <div className="mb-1">
                        <input type="text"  placeholder="ticket" className="flex justify-end" onChange={handleInputChange}></input>
                    </div>
                    <div className="mb-1">
                        <input type="text" placeholder="Asunto" className="form-control" onChange={handleInputChange}></input>
                    </div>
                    <div className="mb-1  ">
                        <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange}></input>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="rounded-lg bg-gray-200 p-3 ml-23">Enviar</button>
                    </div>
                    <div></div>


                </form>


            </div>
        </>
    );
}

export default Form;