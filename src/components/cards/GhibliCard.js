import React from 'react'
import { Link } from 'react-router-dom'

export const GhibliCard = ({
   id,
    title,
    original_title,
    original_title_romanised,
    description,
    director,
    producer,
    release_date,
    running_time,
    rt_score,
    people,
    url
    
}) => {

    return (
        <div className='card animate__animated animate__fadeI mt-1 mb-1'>
        
                <div className='card-header'>
                <h2>{title}</h2>
                <h3>{original_title}</h3>
                <h4>{original_title_romanised}</h4>
                <hr/>
                </div>
                <div className='card-body'>
                <p>{description}</p>
                <h4>{director}</h4>
                </div>
                <hr/>
                <div className='card-ambient mb-1 mt-1'>
                    <Link className='pointer'
                    to={`/More/${id}/${'Personas'}/${title}`}
                    >
                        Personas
                    </Link>
                    <Link className='pointer'
                    to={`/More/${id}/${'Especies'}/${title}`}
                    >
                        Especies
                    </Link>
                    <Link className='pointer'
                    to={`/More/${id}/${'Lugares'}/${title}`}
                    >
                    Lugares
                    </Link>
                    <Link className='pointer'
                    to={`/More/${id}/${'Carros'}/${title}`}
                    >
                    Vehiculos
                    </Link>
                </div>
                <hr/>
                <div className='card-footer mt-5'>
                    <div>
                    <h5>Productor:{producer}</h5>
                    
                    <h5>Lanzamiento:{release_date}</h5>
                    </div>
             <div>
             <h5>Duracion:{running_time}</h5>
                 
                 <h5>Puntaje:{rt_score}</h5>
             </div>
                  
                   
                    
               
                </div>

     
        </div>
    )
}