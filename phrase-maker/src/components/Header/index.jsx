import React from "react";
import lectura from "../../assets/images/lectura.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className=" w-full flex justify-between py-2 bg-[#1C1C1C]">
      <div className=" flex flex-col ml-7 w-20 justify-center items-center cursor-pointer">
        <img onClick={handleClickHome} src={lectura} width={50} />
      </div>

      <div className="flex w-full justify-end  gap-4 py-2 px-4 ">
        <Link
          to="/"
          className="text-gray-500 hover:text-white font-normal text-md items-center justify-center py-2"
        >
          Inicio
        </Link>

        <Link
          to="/contact"
          className="text-gray-500 hover:text-white font-normal text-md items-center justify-center py-2"
        >
          Contáctenos
        </Link>

        <Link
          to="/create"
          className="bg-[#554F95] px-2 py-2 rounded-md text-white font-bold text-md "
        >
          Crear Frase
        </Link>
      </div>
    </div>
  );
};

export default Header;
