
import * as types from "./ActionTypes";


export const initialstate = {
    asset: null,
    userassets: [],
    loading: false,
    error: null,
    assetdetails:null,
}

export const assetreducer = (state = initialstate, action)=>{
    switch (action.type) {
      case types.getassetrequest:
      case types.getuserassetrequest:
        return { ...state, loading: true, error: null };

      case types.getassetsuccess:
        return { ...state, asset: action.payload, loading: false, error: null };

      case types.getassetdetailssuccess:
        return {
          ...state,
          assetdetails: action.payload,
          loading: false,
          error: null,
        };

      case types.getuserassetsuccess:
        return {
          ...state,
          userassets: action.payload,
          loading: false,
          error: null,
        };

      case types.getassetdetailsfailure:
      case types.getassetfailure:
      case types.getuserassetfailure:
        return { ...state, loading: false, error: action.error };

      default:
        return state;
    }
}