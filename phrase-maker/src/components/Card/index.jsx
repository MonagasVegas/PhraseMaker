import React from "react";
import data from "./data.js";
import cita from "../../assets/images/cita.png";

const Card = () => {

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-[40px]">
        {data.map((data) => (
          <div key={data.id} className="w-full">
            <div className="rounded-lg  bg-gradient-to-r from-purple-800 via-blue-500 to-purple-400">
              <div className="px-7 py-4">
                <img src={cita} width={40} />
              </div>

              <div className="flex flex-col py-2 px-5">
                <div className="flex justify-center">
                  <span className="text-black font-normal text-lg items-center justify-center">
                    {data.Title}
                  </span>
                </div>

                <div
                  style={{ aspectRatio: "16/9" }}
                  className="flex gap-3  items-end  "
                >
                  <span className="text-black font-bold text-md ">Autor</span>
                  <span className="text-black font-normal text-md items-center justify-center">
                    {data.Language}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
