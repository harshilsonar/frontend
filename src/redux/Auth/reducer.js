import { SIGNIN, SIGNUP } from "../actiontype";

const initalstate={

   user:[],
   currentUser:null,
   isAuth:false
}


export function reducer(state=initalstate,action){

    switch(action.type){
        case SIGNUP:
            return {user:[...state.user,action.payload],currentUser:null}

            case SIGNIN:
                return {...state,currentUser:action.payload}
        default:
           return  state;
    }

}