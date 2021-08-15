import React, { useContext } from 'react'
import { GhibliContext } from '../../reducer/GhibliContext'

export const CardVehicles = ({
    id,
    length,
    name,
    pilot,
    vehicle_class,
    description,
}
) => {
    const {films:peliculas} = useContext(GhibliContext)
    const {personas}=peliculas
    const TraerPiloto=()=>{
        personas.filter(item=>item.url===pilot)
    }
    return (
        (id)?
        <div className='card-carro animate__animated  animate__fadeIn'>
            <h3>Nombre :{name}</h3>
            <hr/>
            <h3>Largo :{length}</h3>
            <hr/>
            <h3>Clase :{vehicle_class}</h3>
            <hr/>
            <div className='card-body-carro'>

            <h3>Descripcion :{description}</h3>
            </div>
            <hr/>
            <h3>Piloto :{TraerPiloto(pilot)}</h3>
            <hr/>
        </div>:
        <h1>NO Se encontraron personajes</h1>
    )
}
