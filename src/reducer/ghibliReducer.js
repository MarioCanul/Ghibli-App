export const GhibliReducer = (state={},action) => {

    switch (action.type) {
       case 'loading': 
       return{
        ...action.payload,
       };
        default:
            return  state;
    }
   
   }