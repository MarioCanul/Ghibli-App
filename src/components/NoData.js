import React from 'react'
import { Link } from 'react-router-dom'

export const NoData = () => {
    return (
        <div className='no-data'>

               <h1>No existen Datos</h1>

               <Link to="/" className='btn btn-primary no-data-buton'>Regresar</Link>
        </div>
    )
}
