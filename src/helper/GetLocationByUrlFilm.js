import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"

const LugaresDeLaPelicula=(item,url)=>{
   
    const Esta=item.films.filter(i=>i===url)
   
    if (Esta.length>0) {
        return true
    }
    return false
}
export const GetLocationByUrlFilm = (url) => {
   
    const {films} = useContext(GhibliContext)
    const {locations}=films
    return locations.filter(item=> LugaresDeLaPelicula(item,url))
}
