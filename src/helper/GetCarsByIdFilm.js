import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"

export const GetCarsByUrlFilm = (url) => {
    const {films} = useContext(GhibliContext)
    const {vehiculos}=films
   const Car= vehiculos.filter(car=>car.films[0]===url)//obtencion del vehiculo por la url de la pelicula
   return Car
}