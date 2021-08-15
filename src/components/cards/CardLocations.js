import React, { useContext } from "react";
import { GhibliContext } from "../../reducer/GhibliContext";

export const CardLocations = ({
  id,
  name,
  surface_water,
  terrain,
  residents,
  climate,
  urlFilm,
}) => {
    const { films: peliculas } = useContext(GhibliContext);
  const { personas } = peliculas;
    const TraerPersonas = () => {
        const idPersona=residents.map(item=>item.split('/')[4] )
        let filtered = idPersona.filter(Boolean);
            if (filtered.length>0) {
                const PersonasInfor=personas.filter(item=>{
                    const value=filtered.filter(i=>i===item.id)
                    if (value.length>0) {
                        return true
                    }
                    return false
                })
                return PersonasInfor.map((item) =>
                item ? (
                  <ul key={item.id}>
                    <span>{item.name}</span>
                  </ul>
                ) : (
                  <h4>NO hay personajes</h4>
                )
              );
            }
          return residents
       
      };
  return id ? (
    <div className="card-carro animate__animated  animate__fadeIn">
      <h3>Nombre :{name}</h3>
      <hr />
      <h3>Clima :{climate}</h3>
      <hr />
      <h3>Terreno :{terrain}</h3>
      <hr />
      <div className="card-body-carro">
        <h3>residentes :{TraerPersonas()}</h3>
      </div>
      <hr />
      <h3>Superficie del agua :{surface_water}</h3>
      <hr />
    </div>
  ) : (
    <h1>NO Se encontraron personajes</h1>
  );
};
