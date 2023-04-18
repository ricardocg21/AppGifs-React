import React from "react";
import { useState, useEffect } from "react";
import { obtenerGif } from "../helpers/obtenerGif";

export const useFetchGifs = (categoria) => {
  const [imagenes, setimagenes] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const obtenerImagen = async () => {
    const nuevasImagenes = await obtenerGif(categoria);
    setimagenes(nuevasImagenes);
    setisLoading(false);
  };
  useEffect(() => {
    obtenerImagen();
  }, []);

  return {
    imagenes,
    isLoading,
  };
};
