import React, {} from 'react'


const Form = () => {


    return (
       <div className='mt-9'>
        <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Titulo del reporte:
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border required rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="falla en sistema"/>
            <p class="text-black text-xs italic">ingrese e titulo del reporte*</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              tipo de problema
            </label>
            <select class="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="grid-state">
                <option defaultChecked> </option>
                <option>Tarea</option>
                <option>Falla</option>
                <option>Otros</option>
              </select>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              descripcion del problema
            </label>
            <textarea style={{height:'350px',maxHeight:'350px',minHeight:'350px'}} class="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="falla"/>
            <p class="text-gray-600 text-xs italic">describe el reporte *</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              asignado por:
            </label>
            <input class="appearance-none block w-full bg-white text-black rounded py-3 px-4 " id="grid-city"  readOnly placeholder="Albuquerque"/>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              nivel de importancia
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option defaultChecked> </option>
                <option>Muy baja</option>
                <option>baja</option>
                <option>media</option>
                <option>alta</option>
                <option>muy alta</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              carga imagen 
            </label>
            {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/> */}
          
          
          </div>
        </div>
      <div className='flex justify-end mt-10'>

                            <button 
                                class="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                 >
                                Enviar Reporte
                            </button>
                                     </div>
      </form>

                        
                  </div>
    );
}

export default Form;