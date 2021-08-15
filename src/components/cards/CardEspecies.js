import React, { useContext } from "react";
import { GhibliContext } from "../../reducer/GhibliContext";

export const CardEspecies = ({
  id,
  name,
  classification,
  eye_colors,
  hair_colors,
  people,
  films,
  url,
  urlFilm,
}) => {
  const { films: peliculas } = useContext(GhibliContext);
  const { personas,especies } = peliculas;

  const TraerPersonas = () => {
    especies.map(item=>item.name)
    const personasConIdFilm = personas.filter((e) => {
      const EnLaPeli = e.films.filter((item) => item === urlFilm);
      if (EnLaPeli.length > 0) {
        return true;
      }
      return false;
    });
    // const EspeciePersonajes=personasConIdFilm.filter(item=>item.species===url)
    // console.log(EspeciePersonajes)
    return personasConIdFilm.map((item) =>
      item ? (
        <ul key={item.id}>
          <span>{item.name}</span>
        </ul>
      ) : (
        <h4>NO hay personajes</h4>
      )
    );
  };

  return id ? (
    <div className="card-people animate__animated  animate__fadeIn">
      <h3>Nombre :{name}</h3>
      <hr />
      <h3>Clasificacion :{classification}</h3>
      <hr />
      <h3>Color de ojos :{eye_colors}</h3>
      <hr />
      <h3>Color de Cabello :{hair_colors}</h3>
      <hr />
      <h3>Personajes :{TraerPersonas(people)}</h3>
      <hr />
    </div>
  ) : (
    <h1>NO Se encontraron personajes</h1>
  );
};
