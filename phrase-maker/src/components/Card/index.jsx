import React, { useEffect, useState } from "react";
import cita from "../../assets/images/cita.png";
import useLocalStorage from "../hooks/useLocalStorage";
import { isEmpty } from "lodash";
import SearchBar from "../Search/index";
import TrashBin from "../../assets/svg/TrashBin.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPhrase, setFilterPhrase] = useState([]);
  const [auth] = useLocalStorage("@auth", []);
  const [selected, setSelected] = useState({});

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

  const handleSelected = (data) => () => {
    setSelected(data);
    onOpen();
  };

  const handleDelete = () => {
    const idRemove = selected.id;
    const updateData = filterPhrase.filter((data) => data.id !== idRemove);
    setFilterPhrase(updateData);
    onClose();
  };

  return (
    <div className="">
      <div className=" py-4">
        <SearchBar onChange={handleSearchQuery} placeholder="Buscar frases" />
      </div>

      <div className="py-10   ">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 px-[40px]">
          {filterPhrase.map((data) => (
            <div
              key={data.id}
              onClick={handleSelected(data)}
              className="rounded-lg  bg-white"
            >
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

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`¿Deseas eliminar al autor ${selected.author}?`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col justify-center items-center ">
              <p className="font-semibold text-base leading-6 text-gray-800 mt-4">
                Una vez eliminada, no podrás recuperar
              </p>
              <p className="font-semibold text-base leading-6 text-gray-800 py-2 ">
                ¿Seguro desea eliminar esta frase ?
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleDelete}>Eliminar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Card;
