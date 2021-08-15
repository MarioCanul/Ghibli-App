import { useContext } from "react"
import { GhibliContext } from "../reducer/GhibliContext"

export const GetUrlByIdFilm = (id) => {
    const {films} = useContext(GhibliContext)
    const {movies}=films
   const movie= movies.find(movie=>movie.id===id)
   return movie.url
}