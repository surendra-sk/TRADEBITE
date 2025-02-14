import api from "../../config/api";
import * as types from "./ActionType"



export const getuserwatchlist = ({jwt}) => async (dispatch) => {
    dispatch({ type: types.get_user_watchlist_request });
    
    try {
        const response = await api.get("/api/watchlist", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        dispatch({
            type: types.get_user_watchlist_success,
            payload: response.data,
        });
        console.log("getuserwatchlist data in action", response.data);
    } catch (error) {
        dispatch({
            type: types.get_user_watchlist_failure,
            error: error.message,
        });
        console.log("error at watchlist action ", error.message);
    }
};


export const addtowatchlist = ({coinid,jwt}) => async (dispatch) => {
  dispatch({ type: types.add_to_watchlist_request });

  try {
      const response = await api.patch(`/api/watchlist/add/coin/${coinid}`,{}, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    dispatch({
      type: types.add_to_watchlist_success,
      payload: response.data,
    });
    console.log("add coin to watchlist successfully  in action", response.data);
  } catch (error) {
    dispatch({
      type: types.add_to_watchlist_failure,
      error: error.message,
    });
    console.log("error at watchlist action ", error.message);
  }
};