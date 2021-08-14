import React, { useState } from "react";

export const GhibliHeader = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
    }
  };
  return (
    <div className="header-main">
      <div className="header-logo">
        <img src="./src/logo.svg"
        alt='ghibli-logo' />
      </div>
      <div className="header-search  mt-1 mb-1">
        <form onSubmit={handleSubmit}
        className='form-search'
        >
          <input
          className='text-search'
            type="text"
            placeholder="Escribe el Titulo de la Pelicula"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='btn btn-primary'>Buscar</button>
        </form>
      </div>
    </div>
  );
};
