import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"
const verificarPelicula=(especie,movie)=>{
    
const Especiefilm=especie.films.filter(item=>item===movie.url)
const salioEspeciefilm=movie.species.filter(item=>item===especie.url)
if (salioEspeciefilm.length>0&&Especiefilm.length>0) { 
   
    return true
}
return false
}

export const GetEspecieByIdFIlm = (id) => {
    const {films} = useContext(GhibliContext)
    const {movies, especies}=films
   const movie= movies.find(movie=>movie.id===id)
   const FilmEspecie=especies.filter(especie=>verificarPelicula(especie,movie)===true);
   return FilmEspecie
}