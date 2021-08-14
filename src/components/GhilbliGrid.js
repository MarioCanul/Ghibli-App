import React, { useContext } from 'react'
import { GhibliContext } from '../reducer/GhibliContext'


export const GhilbliGrid = () => {
    const {films} = useContext(GhibliContext);
    const {movies,loading}=films

    return (
        <div className='Ghibli-Grid'>
       {/* {
         (loading)? <h1>... loading</h1> : (
          movies.map(item=>(
                <GhibliCard key={item.id}
                        {...item}
                        />
             ))  
         )
       } */}
        </div>
    )
}
