import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"
const verificarPelicula=(person,url)=>{
const salioPersona=person.films.filter(item=>item===url)
if (salioPersona.length>0) {   
    return true
}
return false
}

export const GetPeopleByIdFIlm = (id) => {
    const {films} = useContext(GhibliContext)
    const {movies, personas}=films
   const movie= movies.find(movie=>movie.id===id)//obtencion de la pelicula

   const FilmPersonas=personas.filter(person=>verificarPelicula(person,movie.url)===true);//obtencion de las personas por la pelicula
   console.log(FilmPersonas)
   return FilmPersonas
}
