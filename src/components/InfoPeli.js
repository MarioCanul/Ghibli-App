import React from 'react'

export const InfoPeli = ({
    name,
    history
}) => {
    return (
        <div className='title-list'>
              <div className='goback-button'>
                <button className='btn btn-primary'>Regresar</button>
              </div>
              <div className='name-title'>
              <h1>{name}</h1>
              </div>
           
            </div>
    )
}
