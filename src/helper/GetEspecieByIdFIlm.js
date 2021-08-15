import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"
const verificarPelicula=(url,especies)=>{
    console.log(url)
const salioEspecie=especies.filter(item=>item.url===url)

if (salioEspecie.length>0) { 
    console.log(salioEspecie)
    return true
}
return false
}

export const GetEspecieByIdFIlm = (id) => {
    const {films} = useContext(GhibliContext)
    const {movies, especies}=films
   const movie= movies.find(movie=>movie.id===id)
   const FilmEspecie=especies.filter(({url})=>verificarPelicula(url,movie.species)===true);
//    const FilmEspecie=especies.filter(especie=>verificarPelicula(especie,movie.species)===true);
  console.log(FilmEspecie)
   return FilmEspecie
}