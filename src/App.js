import React from 'react'
import { GhibliContext } from './reducer/GhibliContext'
import { GhibliReducer } from './reducer/ghibliReducer'

import { GhibliRouter } from './router/GhibliRouter'


export const App = () => {
 
 
  console.log(films)
    return (
        <GhibliContext.Provider value={{films,dispatch}}>
        <GhibliRouter />
        </GhibliContext.Provider>
    )
}