import React, { useContext } from 'react'
import { GhibliContext } from '../../reducer/GhibliContext'
export const CardPeople = 
({
    id,
    name,
    gender,
    age,
    eye_color,
    hair_color,
    films,
    species,
    url
}) => {
    console.log(id)
    const {films:peliculas} = useContext(GhibliContext)
    const {movies, especies}=peliculas
    const TraerEspecies=(species)=>{
      const showEspecie = especies.filter(especie=>especie.url===species)
        return (
            <ul>
            <li>Name :{showEspecie[0].name}</li>
            <li>Clasificacion:{showEspecie[0].classification}</li>
            <li>Ojos :{showEspecie[0].eye_colors}</li>
            <li>Cabello :{showEspecie[0].hair_color}</li>
            </ul>
        )
    }
    const TraerPeliculas=(films)=>{
        const showPelicula = movies.filter(film=>film.url===films[0])
        return (
            <ul>
            <li>Name :{showPelicula[0].title}</li>
            </ul>
        )
    }
   
   
    return (
        (id)?
        <div className='card-people animate__animated  animate__fadeIn'>
            <h3>Nombre :{name}</h3>
            <hr/>
            <h3>Genero :{gender}</h3>
            <hr/>
            <h3>Años :{age}</h3>
            <hr/>
            <h3>Color de ojos :{eye_color}</h3>
            <hr/>
            <h3>Color de Cabello :{hair_color}</h3>
            <hr/>
            <h3>Pelicula :{TraerPeliculas(films)}</h3>
            <hr/>
            <h3>Especies :{TraerEspecies(species)}</h3>
            <hr/>
        </div>:
        <h1>NO Se encontraron personajes</h1>
    )
}
