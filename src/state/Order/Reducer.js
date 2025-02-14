import { getallordersfailure, getallordersrequest, getallorderssuccess, payorderfailure, payorderrequest, payordersuccess } from "./ActionTypes";

const initialstates = {
    order: null,
    orders: [],
    loading: false,
    error: null
};
export const orderreducer = (state = initialstates, action)=>{
    switch (action.type) {
        case payorderrequest:
        case getallordersrequest:
            return {
                ...state,
                loading: true,
                error: null,
            };
        
        case payordersuccess:
            return { ...state, order: action.payload, loading: false, error: null };
        
        case getallorderssuccess:
            return { ...state, orders: action.payload, loading: false, error: null };
        
        
        case getallordersfailure:
        case payorderfailure:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}