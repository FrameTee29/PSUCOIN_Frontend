
const initialState = {}

export const UserReducer =(states=initialState,action)=>{
    switch(action.type){
        case 'ADD_USER':
            return  action.frame;
        default:return states;
    }

}