
const initialState = {
    user:{
        sid:"6035512080",
        firstname:"teeraphat"
    }
}

export const UserReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'KEEP_USER':
            return{
                ...state,user:action.payload
            }
        default:return state;
    }

}