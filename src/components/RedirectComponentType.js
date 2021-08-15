import React from "react";
import { Link, useParams } from "react-router-dom";
import { GetEspecieByIdFIlm } from "../helper/GetEspecieByIdFIlm";
import { GetPeopleByIdFIlm } from "../helper/GetPeopleByIdFIlm";
import { GetUrlByIdFilm } from "../helper/GetUrlByIdFilm";
import { CardEspecies } from "./cards/CardEspecies";
import { CardLocations } from "./cards/CardLocations";
import { CardPeople } from "./cards/CardPeople";
import { CardVehicles } from "./cards/CardVehicles";


//redireccionamiento y carga de datos para las cards
export const RedirectComponentType = () => {
  const { id, tipo } = useParams();
  const urlFilm =GetUrlByIdFilm(id)
  const ShowComponent = () => {
    switch (tipo) {
      case "Personas":
        const filmspeople = GetPeopleByIdFIlm(id);//obtencion de las personas que estan en la pelicula
        
        return (
          <div className="list-cards">
            {filmspeople.length > 0 ? (
              filmspeople.map((item) => <CardPeople key={item.id} {...item}/>)
            ) : (
              <div>
                <h1>NO existen Datos</h1>
                <Link to="/">Regresar</Link>
              </div>
            )}
          </div>
        );
        case "Especies":
          const filmsEspecie = GetEspecieByIdFIlm(id);
          return (
          <div className="list-cards">
            {filmsEspecie.length > 0 ? (
              filmsEspecie.map((item) => <CardEspecies key={item.id} {...item} urlFilm={urlFilm}/>)
            ) : (
              <div>
                <h1>NO existen Datos</h1>
                <Link to="/">Regresar</Link>
              </div>
            )}
          </div>
        );

      case "Carros":
        return <CardVehicles id={id} />;
      
      case "Lugares":
        return <CardLocations id={id} />;

      default:
        break;
    }
  };
  return <>{ShowComponent()}</>;
};
