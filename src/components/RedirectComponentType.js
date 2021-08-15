import React from "react";
import { Link, useParams } from "react-router-dom";
import { GetPeopleByIdFIlm } from "../helper/GetPeopleByIdFIlm";
import { CardEspecies } from "./cards/CardEspecies";
import { CardLocations } from "./cards/CardLocations";
import { CardPeople } from "./cards/CardPeople";
import { CardVehicles } from "./cards/CardVehicles";

export const RedirectComponentType = () => {
  const { id, tipo } = useParams();
  const ShowComponent = () => {
    switch (tipo) {
      case "Personas":
        
        const filmspeople=GetPeopleByIdFIlm(id)
        return (
          <div className='list-cards'>
          {
           (filmspeople.length>0)?(
            filmspeople.map(item=>(
              <CardPeople key={item.id} {...item} />
                ))
           ):(<div>
             <h1>NO existen Datos</h1> 
             <Link to='/'>Regresar</Link></div> )

          }
          </div>
         
        )
      case "Carros":
        return <CardVehicles id={id}/>;
      case "Especies":
        return <CardEspecies id={id}/>;
      case "Lugares":
        return <CardLocations id={id}/>;

      default:
        break;
    }
  };
  return <>{ShowComponent()}</>;
};
