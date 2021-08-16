import React from 'react'


export const BackFilms = ({
    name,
    history
}) => {
 
    return (
        <div className='title-list'>
              <div className='goback-button'>
                <button className='btn btn-primary' onClick={()=>history.goBack()}>Regresar</button>
              </div>
              <div className='name-title'>
              <h1>{name}</h1>
              </div>
           
            </div>
    )
}
