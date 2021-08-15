import React from "react";
import {  useHistory, useParams } from "react-router-dom";
import { GetCarsByUrlFilm } from "../helper/GetCarsByIdFilm";
import { GetEspecieByIdFIlm } from "../helper/GetEspecieByIdFIlm";
import { GetLocationByUrlFilm } from "../helper/GetLocationByUrlFilm";
import { GetPeopleByIdFIlm } from "../helper/GetPeopleByIdFIlm";
import { GetUrlByIdFilm } from "../helper/GetUrlByIdFilm";
import { CardEspecies } from "./cards/CardEspecies";
import { CardLocations } from "./cards/CardLocations";
import { CardPeople } from "./cards/CardPeople";
import { CardVehicles } from "./cards/CardVehicles";
import { BackFilms } from "./BackFilms";
import { NoData } from "./NoData";


//redireccionamiento y carga de datos para las cards
export const RedirectComponentType = () => {
const history=useHistory()
  
  const { id, tipo,name } = useParams();
  const urlFilm =GetUrlByIdFilm(id)
  const ShowComponent = () => {
    switch (tipo) {
      case "Personas":
        const filmspeople = GetPeopleByIdFIlm(id);//obtencion de las personas que estan en la pelicula
        
        return (
          < >
            <BackFilms history={history} name={name}/>
             
             <div className="list-cards">
             {filmspeople.length > 0 ? (
             
             filmspeople.map((item) =>
               
               <CardPeople key={item.id}   {...item}/>
             ) 
           ) : (
             <NoData/>
           )}
             </div>
           
          </>
        );
        case "Especies":
          const filmsEspecie = GetEspecieByIdFIlm(id);
          return (
            <> 
             <BackFilms history={history} name={name}/>
          <div className="list-cards">
            {filmsEspecie.length > 0 ? (
              filmsEspecie.map((item) => <CardEspecies key={item.id} {...item} urlFilm={urlFilm}/>)
            ) : (
              <NoData/>
              
            )}
          </div>
          </>
        );

      case "Carros":
        const car =GetCarsByUrlFilm(urlFilm)
        return (
          <> 
           <BackFilms history={history} name={name}/>
          <div className="list-cards">
            {car.length > 0 ? (
              car.map((item) => <CardVehicles key={item.id} {...item} urlFilm={urlFilm}/>)
            ) : (
              <NoData/>
            )}
          </div>
          </>
        );
      
      case "Lugares":
        const Filmlocations=GetLocationByUrlFilm(urlFilm)
       
        return (
        <>
           <BackFilms history={history} name={name}/>
          <div className="list-cards">
            {Filmlocations.length > 0 ? (
              Filmlocations.map((item) => <CardLocations key={item.id} {...item} urlFilm={urlFilm}/>)
            ) : (
              <NoData/>
            )}
          </div>
          </>
        );

      default:
        break;
    }
  };
  return <>{ShowComponent()}</>;
};
