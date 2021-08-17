import React, {  useReducer, useState } from 'react'
import { LoadinData } from './components/LoadinData'
import { useLoading } from './hooks/useLoading'
import { GhibliContext } from './reducer/GhibliContext'
import { GhibliReducer } from './reducer/ghibliReducer'
import { GhibliRouter } from './router/GhibliRouter'

const init = () => {
  return (
    JSON.parse(localStorage.getItem("data")) 
  );
};

const CargarDataAlDispatch=(dispatch,Alldata)=>{
    dispatch({
        type: "loading",
        payload:Alldata
      });
}

export const App = () => {
    const [state, setstate] = useState(true)
 
 const Alldata=useLoading()
 const [films, dispatch] = useReducer(GhibliReducer, {}, init);
    if (!Alldata.loading&&state) { 
        CargarDataAlDispatch(dispatch,Alldata)
        return setstate(false)
  }

    return (
       (!Alldata.loading)?(
        <GhibliContext.Provider value={{films,dispatch}}>
        <GhibliRouter />
        </GhibliContext.Provider>):
    <LoadinData/>
    )
}