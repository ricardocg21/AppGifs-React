import React from "react";
import { useState } from "react";
import { AgregarCategoria, ContenedorGrid } from "./componentes";

export const GiffExpertApp = () => {
  const [categorias, setcategorias] = useState([]);

  const agregarCategoria = (categoria) => {
    if (categorias.includes(categoria)) return;

    setcategorias([categoria, ...categorias]);
  };

  return (
    <>
      {/*titulo*/}
      <h1>GiffExpertApp</h1>
      {/*input*/}
      <AgregarCategoria agregarCategoria={agregarCategoria} />

      {/*lista de gifs*/}
      {categorias.map((categoria) => {
        return <ContenedorGrid key={categoria} categoria={categoria} />;
      })}

      {/*cada uno de los gifs*/}
    </>
  );
};
