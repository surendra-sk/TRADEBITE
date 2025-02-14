

import { exists } from "../../page/WatchList/exists";
import * as types from "./ActionType";


const initialstate = {
    items: [],
    userwatchlist: null,
    loading: false,
    error:null,
}


export const watchlistreducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.get_user_watchlist_request:
        case types.add_to_watchlist_request:
            return { ...state, loading: true, error: null };
            
        case types.get_user_watchlist_success:
            return { ...state, loading: false, userwatchlist: action.payload, items: action.payload.coins, error: null };
        
        
        case types.add_to_watchlist_success:
            let updateitems = exists(state.items, action.payload) ? state.items.filter((item) => item.id !== action.payload.id): [action.payload, ...state.items];

            return{...state,items:updateitems,error:null,loading:false}
        
        
        
        case types.get_user_watchlist_failure:
         case   types.add_to_watchlist_failure:
            return { ...state, loading: false, error:action.error}
    
        default:
            return state;
    }
}