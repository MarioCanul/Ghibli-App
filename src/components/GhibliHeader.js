import React, { useContext, useState } from "react";
import { GhibliContext } from "../reducer/GhibliContext";

export const GhibliHeader = () => {
  const { films} = useContext(GhibliContext);
  const {movies} = films;
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      
    }
  };
  const handleChange=(e)=>{
     setInput(e.target.value)
   let peli=movies.find(peli=>peli.title===input)
   setInput(peli)
   console.log(input)
  }
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
            onChange={handleChange}
          />
          <button className='btn btn-primary' type='submit'>Buscar</button>
        </form>
      </div>
    </div>
  );
};
