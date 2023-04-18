import React, { useEffect, useState } from "react";

import { useFetchGifs } from "../Hooks/useFetchGifs";

import { GifItem } from "./GifItem";

export const ContenedorGrid = ({ categoria }) => {
  const { imagenes, isLoading } = useFetchGifs(categoria);
  console.log({ imagenes, isLoading });

  return (
    <>
      <h3>{categoria} </h3>
      {isLoading ? <h2>Cargando... </h2> : null}
      <div className="card-grid">
        {imagenes.map((imagen) => (
          <GifItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};
