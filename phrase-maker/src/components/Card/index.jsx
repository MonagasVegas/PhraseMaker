import React, { useEffect, useState } from "react";
import cita from "../../assets/images/cita.png";
import useLocalStorage from "../hooks/useLocalStorage";
import { isEmpty } from "lodash";
import SearchBar from "../Search/index";

const Card = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPhrase, setFilterPhrase] = useState([]);
  const [auth] = useLocalStorage("@auth", []);

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (!searchQuery) {
      setFilterPhrase(auth);
    }
    const newSearchQuery = searchQuery?.toLowerCase() || "";
    // Garantizando la busqueda en minusculas
    const newList = auth.filter(
      (data) =>
        data.author.toLowerCase().includes(newSearchQuery) ||
        data.phrase.toLowerCase().includes(newSearchQuery)
    );

    setFilterPhrase(newList);
  }, [auth, searchQuery]);

  return (
    <>
      <div className=" py-4">
        <SearchBar onChange={handleSearchQuery} placeholder="Buscar frases" />
      </div>

      <div className="py-10">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 px-[40px]">
          {filterPhrase.map((data) => (
            <div key={data.id} className="  rounded-lg  bg-white">
              <div className="px-7 py-4">
                <img src={cita} width={40} />
              </div>

              <div
                style={{ aspectRatio: "16/9" }}
                className="flex justify-center items-center  align-center px-5 "
              >
                <span className="text-black font-normal text-2xl  ">
                  {data.phrase}
                </span>
              </div>

              <div className="flex gap-3 px-3 py-3  items-end ">
                <span className="text-neutral80 font-bold text-xs ">Autor</span>
                <span className="text-neutral80 font-bold text-xs items-center justify-center">
                  {data.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {isEmpty(auth) && (
          <div className="h-full w-full flex p-2 py-10 place-content-center">
            <p className="text-center text-red-500">
              Tu lista de frases está vacía.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
