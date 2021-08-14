import React from "react";
import { useParams } from "react-router-dom";
import { CardEspecies } from "./cards/CardEspecies";
import { CardLocations } from "./cards/CardLocations";
import { CardPeople } from "./cards/CardPeople";
import { CardVehicles } from "./cards/CardVehicles";

export const RedirectComponentType = () => {
  const { id, tipo } = useParams();
  const ShowComponent = () => {
    switch (tipo) {
      case "Personas":
        return <CardPeople id={id}/>;
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
