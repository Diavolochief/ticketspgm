import React from 'react'

const footer = () => {
  return (
    
    <footer class="block py-4 fixed-bottom w-full  -mt-20 bg-white ">
    <div class="container mx-auto justify-center ">
        <hr class="mb-4 m-auto w-11/12 border-b-1 border-gray-400" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full px-4">
                <div class=" text-xs text-slate-500 font-semibold py-1 text-center md:text-center">
                    Sistema de Tickets V 0.1.0 © <span >2022</span>
                    | Hecho con 💜 por <a href="https://www.perspective.com.mx" target="_blank"
                        class="text-purple-500 hover:underline">Perspective Global de México</a>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default footer