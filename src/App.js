import React from 'react'
import { useLoading } from './hooks/useLoading'
import { GhibliContext } from './reducer/GhibliContext'
import { GhibliReducer } from './reducer/ghibliReducer'

import { GhibliRouter } from './router/GhibliRouter'


export const App = () => {
 const[films,dispatch]=useLoading()
 
  
    return (
        <GhibliContext.Provider value={{films,dispatch}}>
        <GhibliRouter />
        </GhibliContext.Provider>
    )
}