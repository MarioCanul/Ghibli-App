
export const GhibliReducer = (state={},action) => {
    
    switch (action.type) {
       case 'loading':
           localStorage.setItem('data',JSON.stringify( {...action.payload})) 
       return{
        ...action.payload,
       };
       case 'Search':
    return {
        ...action.payload
    }
    case 'CargarLocalData':
        const data=JSON.parse(localStorage.getItem("data"))
        const { movies, especies, locations, error, loading, personas, vehiculos,movieSelected } =action.payload;
    
        if (data) {
            return{
                ...data
                };
        }
        
       return{
        movies,
        especies,
        personas,
        vehiculos,
        locations,
        loading,
        movieSelected:0,
        error,
       };
        default:
            return  state;
    }
   
   }