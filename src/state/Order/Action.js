import api from "../../config/api";
import * as types from "./ActionTypes";

export const payorder =
  ({ jwt, orderdata, amount }) =>
  async (dispatch) => {
    dispatch({ type: types.payorderrequest });
    try {
      const response = await api.post("/api/orders/pay", orderdata, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: types.payordersuccess,
        payload: response.data,
        amount,
      });
      console.log("order success", response.data);
    } catch (error) {
      console.log("error at order action", error);
      dispatch({ type: types.payorderfailure, error: error.message });
    }
  };

export const getallordersforuser =
  ({ jwt, ordertype, assetsymbol }) =>
  async (dispatch) => {
    dispatch({ type: types.getallordersrequest });
    try {
      const response = await api.get("/api/orders", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: {
          ordertype: ordertype,
          assetsymbol: assetsymbol,
        },
      });

      dispatch({
        type: types.getallorderssuccess,
        payload: response.data,
      });
      // console.log("user order is here ",response.data);
    } catch (error) {
      console.log("error at order reducer", error);
      dispatch({ type: types.getallordersfailure, error: error.message });
    }
  };
