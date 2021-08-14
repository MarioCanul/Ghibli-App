import axios from 'axios';
import  { useEffect, useReducer} from 'react'
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
 
    useEffect(() => {
        const urls=[
            "https://ghibliapi.herokuapp.com/films/",
            "https://ghibliapi.herokuapp.com/species/",
            "https://ghibliapi.herokuapp.com/people/",
            "https://ghibliapi.herokuapp.com/vehicles/",
            "https://ghibliapi.herokuapp.com/locations/",

        ]
        let Peticiones = [];
        for (let index = 0; index < urls.length; index++) {
            const element = urls[index];
            Peticiones.push(
               axios.get(element)
            );
          }

          Promise.all(Peticiones)
        .then(function (results) {
           
         dispatch({
            type: "loading",
            payload: {
              movies: results[0].data,
              especies: results[1].data,
              personas: results[2].data,
              vehiculos:results[3].data,
              locations: results[4].data,
              loading: false,
              error: false,
            },
          })
  });

    }, [])
    return [films, dispatch]
}
