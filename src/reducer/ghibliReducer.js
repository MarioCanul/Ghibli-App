export const GhibliReducer = (state={},action) => {

    switch (action.type) {
       case 'loading':
           localStorage.setItem('data',JSON.stringify( {...action.payload})) 
       return{
        ...action.payload,
       };
        default:
            return  state;
    }
   
   }