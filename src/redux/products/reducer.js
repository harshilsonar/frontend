import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actiontype"

const initalstate={
    loading:false,
    errors:null,
    data:[]
}

export function reducer(state=initalstate,{payload,type}){
    switch(type){
     case GET_PRODUCT_REQUEST:
        return {...state,loading:true};
        case GET_PRODUCT_SUCCESS:
            return {...state,loading:false,data:payload};
            case GET_PRODUCT_ERROR:
                return {...state,loading:false,errors:payload};
                default:
                    return  state;
    }

}

