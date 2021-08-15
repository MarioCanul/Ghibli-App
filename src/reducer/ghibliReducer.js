export const GhibliReducer = (state={},action) => {

    switch (action.type) {
       case 'loading':
           localStorage.setItem('data',JSON.stringify( {...action.payload})) 
       return{
        ...action.payload,
       };
       case 'Search':
       console.log('aqui ando')
    return {
        ...action.payload
    }
        default:
            return  state;
    }
   
   }