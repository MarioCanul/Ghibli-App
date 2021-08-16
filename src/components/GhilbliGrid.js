import React, { useContext } from 'react'
import { GhibliContext } from '../reducer/GhibliContext'
import { GhibliCard } from './cards/GhibliCard';


export const GhilbliGrid = () => {
    const {films,dispatch} = useContext(GhibliContext);
    const {movies,loading}=films
    const CargarTodasLasPeliculas=()=>{
        dispatch({
            type:'CargarLocalData',
            payload: null
          })
    }
   

    return (
        <> 
           {
( movies.length===1)?
<div className='back-home'><button onClick={CargarTodasLasPeliculas} className='btn btn-primary'>Regresar a las peliculas</button></div>:''

            }
        <div className='Ghibli-Grid'>
         
             
       {
         (loading)? <h1>... loading</h1> : (
          movies.map(item=>(
             
                <GhibliCard key={item.id}
                        {...item}
                        />
             ))  
         )
       }
        </div>
        </>
    )
}
