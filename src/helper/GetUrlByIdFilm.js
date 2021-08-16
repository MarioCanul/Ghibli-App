import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"

export const GetUrlByIdFilm = (id) => {
    const {films} = useContext(GhibliContext)
    const {movies}=films
   const movie= movies.find(item=>item.id===id)
if (movie===undefined) {
   
   return null
}
 return movie.url
}