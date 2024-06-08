import React from 'react'
import lectura from '../../assets/images/lectura.png'

const Header = () => {
  return (
    <div className=" w-full flex justify-between py-2 bg-[#1C1C1C]">
    <div className=" flex flex-col ml-7 w-20 justify-center items-center cursor-pointer">
      {/* <h1 className="text-md text-white bg-[#49BFBF] rounded-sm px-2 items-center font-sedgwick ">DREAM</h1>
      <h1 className="text-md text-white items-center font-serif  ">VIEW</h1> */}
      <img src={lectura} width={50} />
    </div> 

    <div className="flex gap-5 py-2 mr-7">
      <button className="text-gray-500 hover:text-white font-normal text-md items-center justify-center">Sobre nosotros</button>
      <button className="text-gray-500 hover:text-white font-normal text-md items-center justify-center">Contáctenos</button>
      <button className="bg-[#554F95] px-4 py-2 rounded-md text-white font-bold text-md">Crear Frase</button>
    </div>
    
  </div>
  )
}

export default Header