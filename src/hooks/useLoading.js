import axios from "axios";
import { useEffect, useState } from "react";


export const useLoading = () => {
  const urls = [
    "https://ghibliapi.herokuapp.com/films/",
    "https://ghibliapi.herokuapp.com/species/",
    "https://ghibliapi.herokuapp.com/people/",
    "https://ghibliapi.herokuapp.com/vehicles/",
    "https://ghibliapi.herokuapp.com/locations/",
  ];

  const [Alldata, setAlldata] = useState({
    movies: null,
    especies: null,
    personas: null,
    vehiculos: null,
    locations: true,
    loading: true,
    movieSelected:0,
    error: null
   });

  useEffect(() => {
    setAlldata({
      movies: null,
      especies: null,
      personas: null,
      vehiculos: null,
      locations: true, 
      loading: true,
      movieSelected:0,
      error: null
     });

    let Peticiones = [];
 
    for (let index = 0; index < urls.length; index++) {
      const element = urls[index];
      Peticiones.push(axios.get(element));
    }
    axios.all(Peticiones).then(function (results) {
      setAlldata({
          movies: results[0].data,
          especies: results[1].data,
          personas: results[2].data,
          vehiculos: results[3].data,
          locations: results[4].data, 
          loading: false,
          movieSelected:0,
          error: null
         });
        
    })
    .catch( (e) => {
      console.log('entro al error',e)
      setAlldata({
        movies: null,
        especies: null,
        personas: null,
        vehiculos: null,
        locations: true, 
        loading: true,
        movieSelected:0,
        error: 'No se cargaron los datos'
       });
  })

  }, []);

  return Alldata;
};
