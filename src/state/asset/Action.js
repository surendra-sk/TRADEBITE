import api from "../../config/api";
import * as types from "./ActionTypes";

export const getassetbyid =
  ({ assetid, jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.getassetrequest });
    try {
      
      const response = await api.get(`/api/asset/${assetid}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: types.getassetsuccess,
        payload: response.data,
      });
      console.log("asset details is here", response.data);
    } catch (error) {
      dispatch({
        type: types.getassetfailure,
        error: error.message,
      });
      console.log("error at asset aciton", error.response.data);
    }
  };

export const getassetdetails =
  ({ jwt, coinid }) =>
  async (dispatch) => {
    dispatch({ type: types.getassetdetailsrequest });
    try {
      const response = await api.get(`/api/asset/coin/${coinid}/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: types.getassetdetailssuccess,
        payload: response.data,
      });
      console.log("user asset details is here", response.data);
    } catch (error) {
      console.log("error at asset action",error);
      dispatch({
        type: types.getassetdetailsfailure,
        error: error.message,
      });
      console.log("error at asset aciton", error);
    }
  };
export const getalluserasset =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.getuserassetrequest });
    try {
      const response = await api.get(`/api/asset`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: types.getuserassetsuccess,
        payload: response.data,
      });
      console.log("user asset details is here", response.data);
    } catch (error) {
      dispatch({
        type: types.getuserassetsuccess,
        error: error.message,
      });
      console.log("error at asset aciton", error);
    }
  };
