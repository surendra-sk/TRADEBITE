import axios from "axios";
import api, { API_BASE_URL } from "../../config/api";
import {
    FETCH_COIN_BY_ID_FAILURE,
    FETCH_COIN_BY_ID_REQUEST,
  FETCH_COIN_BY_ID_SUCCESS,
  FETCH_COIN_DETAILS_FAILURE,
  FETCH_COIN_DETAILS_REQUEST,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_COIN_LIST_REQUEST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_COIN_MARKET_CHART_FAILURE,
  FETCH_COIN_MARKET_CHART_REQUEST,
  FETCH_COIN_MARKET_CHART_SUCCESS,
  FETCH_TOP50_COINS_FAILURE,
  FETCH_TOP50_COINS_REQUEST,
  FETCH_TOP50_COINS_SUCCESS,
  SEARCH_COIN_FAILURE,
  SEARCH_COIN_REQUEST,
  SEARCH_COIN_SUCCESS,
} from "./ActionType";

export const getcoinlist = (page) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_LIST_REQUEST });

const baseurl = "https://tradebite.onrender.com";
  try {
    const { data } = await api.get(
      `${baseurl}/coins?page=${page}`
    );

    console.log("COIN LIST", data);
      dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
      
  } catch (error) {
    dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: error.message });
    
    console.log(error);
  }
};

export const gettop50coinlist = () => async (dispatch) => {
    dispatch({ type: FETCH_TOP50_COINS_REQUEST });
    
   const baseurl ="https://tradebite.onrender.com";
    try {
        const response = await api.get(`${baseurl}/coins/top50`);
    
        dispatch({ type: FETCH_TOP50_COINS_SUCCESS, payload: response.data });
        console.log("COIN LIST", response.data);
    } catch (error) {
        dispatch({ type: FETCH_TOP50_COINS_FAILURE, payload: error.message });
    
        console.log(error);
    }
};
 
export const fetchmarketchart = ({coinid, days, jwt}) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_MARKET_CHART_REQUEST });
   const baseurl ="https://tradebite.onrender.com";
  try {
      console.log("fetch",coinid);
        const response = await api.get(
          `${baseurl}/coins/${coinid}/chart?days=${days}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
    
        dispatch({ type: FETCH_COIN_MARKET_CHART_SUCCESS, payload: response.data });
        console.log("MARKET CHART", response.data);
    } catch (error) {
        dispatch({ type: FETCH_COIN_MARKET_CHART_FAILURE, payload: error.message });
    
        console.log(error);
    }
};


export const fetchcoinbyid = (coinid) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_BY_ID_REQUEST });

    try {
        const response = await api.get(`/coins/${coinid}`);

        dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: response.data });
        console.log("COIN BY ID", response.data);
    } catch (error) {
        dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.message });

        console.log(error);
    }
};



export const fetchcoindetails = ({coinid, jwt}) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });
   const baseurl ="https://tradebite.onrender.com";
    try {
        console.log("its here",coinid);
      const response = await api.get(`${baseurl}/coins/details/${coinid}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
        dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data });
        console.log("fetchcoindetails is here",response.data);
        
    } catch (error) {
        dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: error.message });
        console.log(error);
        
    }
};


export const searchcoin = (search) => async (dispatch) => {
    dispatch({ type: SEARCH_COIN_REQUEST });
    try {
        const response = await api.get(`/coins/search?q=${search}`);
        dispatch({ type: SEARCH_COIN_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SEARCH_COIN_FAILURE, payload: error.message });
        console.log(error);
    }
};
