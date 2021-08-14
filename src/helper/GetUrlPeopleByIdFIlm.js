import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"
const verificarPelicula=(person,url)=>{
const salioPersona=person.films.filter(item=>item===url)

if (salioPersona.length>0) {
   
    return true
}
return false
}

export const GetUrlPeopleByIdFIlm = (id) => {
    const {films} = useContext(GhibliContext)
    const {movies, personas}=films
   const movie= movies.find(movie=>movie.id===id)
   const FilmPersonas=personas.filter(person=>verificarPelicula(person,movie.url)===true);
   return FilmPersonas
}
