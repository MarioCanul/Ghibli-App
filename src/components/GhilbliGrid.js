import React, { useContext } from "react";
import { GhibliContext } from "../reducer/GhibliContext";
import { GhibliCard } from "./cards/GhibliCard";

export const GhilbliGrid = () => {
  const { films, dispatch } = useContext(GhibliContext);
  const { movies, movieSelected } = films;

  const CargarTodasLasPeliculas = () => {
    dispatch({
      type: "CargarLocalData",
      payload: films,
    });
  };
  return (
    <>
      {movieSelected.length === 1 ? (
        <div className="back-home">
          <button onClick={CargarTodasLasPeliculas} className="btn btn-primary">
            Regresar a las peliculas
          </button>
        </div>
      ) : ''}
         
      <div className="Ghibli-Grid">
    {
        movieSelected.length === 1 ?(
            movieSelected.map((item) => (
                <GhibliCard key={item.id} {...item} />
              ))

        ):( 
       movies.map((item) => (
          <GhibliCard key={item.id} {...item} />
        ))
        
        )

        }

      </div>
    </>
  );
};
