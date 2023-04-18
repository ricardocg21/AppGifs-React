import React, { useState } from "react";

export const AgregarCategoria = ({ agregarCategoria }) => {
  const [categoria, settexto] = useState("");

  const manejarTexto = ({ target }) => {
    settexto(target.value);
  };

  const prevenirSubmit = (event) => {
    event.preventDefault();
    if (categoria.trim() <= 1) return;
    agregarCategoria(categoria.trim());

    settexto("");
  };

  return (
    <form onSubmit={prevenirSubmit}>
      <div>
        <h3>Agregar Categoria</h3>
        <input type="text" onChange={manejarTexto} value={categoria} />
      </div>
    </form>
  );
};
