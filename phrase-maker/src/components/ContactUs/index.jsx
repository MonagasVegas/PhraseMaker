import React from "react";
import sitio from "../../assets/images/sitio.png";
import Header from "../Header";

const ContactUs = () => {
  return (
    <div>
 <div>
        <Header />
      </div>


      <div className="flex justify-center py-10 ">
        <h1 className="text-3xl font-semibold mb-4 text-white">
          {" "}
          PAGINA EN CONSTRUCCIÓN{" "}
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <img src={sitio} className="rounded-lg w-[30%]" />
      </div>
    </div>
  );
};

export default ContactUs;
