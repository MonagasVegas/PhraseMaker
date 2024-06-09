import React from "react";
import Header from "../Header";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CreateSentences = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log("🐉 ~ onSubmit ~ data:", data)
    console.log("Hicismos click");
  });

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex flex-col gap-7 bg-semi-dark fixed  w-screen h-screen">
      
          <div className=" w-full py-10 px-10 flex flex-col ">
            <h1 className="text-3xl font-bold mb-4 text-white">
              Crea tu frase
            </h1>
            <span className="font-normal not-italic text-md text-white -mt-2">
              Completa el formulario
            </span>
          </div>

          <div className=" flex justify-center w-full py-5">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center gap-5 w-10/12 xs:w-1/3 sm:w-10/12 md:w-1/3 lg:w-1/3 xl:w-1/3 "
          >
            <div className="input-field">
              <label>Autor</label>
              <input
                type="text"
                {...register("author", {
                  required: {
                    value: true,
                    message: "Campo requerido, debe ingresar un autor.",
                  },
                  minLength: {
                    value: 4,
                    message: "Debe ingresar mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe ingresar máaximo 10 caracteres.",
                  },
                })}
              />
              {errors.author && (
                <p className="text-red-700 font-semibold text-xs py-2 px-3">
                  {errors.author.message}
                </p>
              )}
            </div>

            <div className="input-field">
              <label>Frase</label>
              <input
                type="text"
                {...register("phrase", {
                  required: {
                    value: true,
                    message: "Campo requerido, debe ingresar una frase.",
                  },
                  minLength: {
                    value: 10,
                    message: "Debe ingresar mínimo 10 caracteres.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar máaximo 50 caracteres.",
                  },
                })}
              />
              {errors.phrase && (
                <p className="text-red-700 font-semibold text-xs py-2 px-3">
                  {errors.phrase.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center py-7 gap-5 w-full xs: flex-col sm:flex-row md:flex lg:flex-row xl:flex-row ">
              <div className="w-1/2">
                <button
                className="py-2 w-full font-semibold rounded-md bg-secondary text-black hover:text-white "
                type="submit"
                >
                  Crear
                </button>
              </div>

              <div className="w-1/2">
                <Link
                  to="/"
                  className=" w-full flex items-center py-2 justify-center text-black font-semibold rounded-md  bg-secondary   text-md  hover:text-white"
                >
                  Volver
                </Link>
              </div>
            </div>
          </form>
          </div>

        
      </div>
    </>
  );
};

export default CreateSentences;