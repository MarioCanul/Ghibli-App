import React, { useEffect, useReducer, useState } from 'react'
import { GhibliReducer } from '../reducer/ghibliReducer'
const init = () => {
    
    return (
      JSON.parse(localStorage.getItem("data")) || {
        movies: null,
        vehicle:null,
        especies: null,
        locations: null,
        people: null,
        loading: false,
        error: false,
      }
    );
  };
export const useLoading = () => {
    const [films, dispatch] = useReducer(GhibliReducer, {}, init)
    const [Personas, setPersona] = useState([]);
    useEffect(() => {
        
        return () => {
            cleanup
        }
    }, [input])
    return (
        <div>
            
        </div>
    )
}
