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
       return{
       ...data
       };
        default:
            return  state;
    }
   
   }