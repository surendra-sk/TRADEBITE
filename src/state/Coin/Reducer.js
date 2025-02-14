
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_BY_ID_SUCCESS, FETCH_COIN_DETAILS_FAILURE, FETCH_COIN_DETAILS_REQUEST, FETCH_COIN_DETAILS_SUCCESS, FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_COIN_MARKET_CHART_FAILURE, FETCH_COIN_MARKET_CHART_REQUEST, FETCH_COIN_MARKET_CHART_SUCCESS, FETCH_COIN_MARKET_FAILURE, FETCH_COIN_MARKET_REQUEST, FETCH_TOP50_COINS_REQUEST, FETCH_TOP50_COINS_SUCCESS, SEARCH_COIN_FAILURE, SEARCH_COIN_SUCCESS } from "./ActionType";

const initialstate = {
    coinlist: [],
    top50: [],
    searchcoinlist: [],
    marketchart: { data: [], loading: false },
    coinbyid: null,
    coindetails: null,
    loading: false,
    error: null
};


const coinReducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_COIN_MARKET_REQUEST:
        case FETCH_COIN_MARKET_CHART_REQUEST:
        case FETCH_TOP50_COINS_REQUEST:
        case FETCH_COIN_BY_ID_REQUEST:
        case FETCH_COIN_DETAILS_REQUEST:
        case FETCH_COIN_LIST_REQUEST:

            return { ...state, loading: true, error: false };
        
        case FETCH_COIN_MARKET_CHART_REQUEST:
            return { ...state, marketchart: { loading: false, data: [] }, error: null };
        
        case FETCH_COIN_LIST_SUCCESS:
            return { ...state, coinlist: action.payload, loading: false, error: null };
        
        case FETCH_TOP50_COINS_SUCCESS:
            return{...state,top50:action.payload,error:null}

        case FETCH_COIN_MARKET_CHART_SUCCESS:
            return { ...state, marketchart: { data: action.payload.prices, loading: false }, error: null }
        
        case FETCH_COIN_DETAILS_SUCCESS:
            return { ...state, coindetails: action.payload, loading: false, error: null };
        
        
        case SEARCH_COIN_SUCCESS:
            return { ...state, searchcoinlist: action.payload.coins, loading: false, error: null };
        
        case FETCH_COIN_MARKET_CHART_FAILURE:
            return { ...state, marketchart: { loading: false, data: [] }, error: null };
        
        
        case SEARCH_COIN_FAILURE:
        case FETCH_COIN_LIST_FAILURE:
        case FETCH_COIN_BY_ID_FAILURE:
        case FETCH_COIN_MARKET_FAILURE:
        case FETCH_COIN_DETAILS_FAILURE:
            return{...state,loading:false,error:action.payload}
        

      default:
        return state;
    }
}


export default coinReducer;