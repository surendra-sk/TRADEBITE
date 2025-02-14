import api from "../../config/api";
import * as action from "./ActionType";



export const getuserwallet = (jwt) => async (dispatch) => {
    dispatch({ type: action.GET_USER_WALLET_REQUEST });

    try {
        const response = await api.get("/api/wallet", {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });

      dispatch({ type: action.GET_USER_WALLET_SUCCESS, payload: response.data });
      console.log("userwallet ",response.data);
    } catch (error) {
        console.log("error at wallet action.js", error);
        dispatch({ type: action.GET_WALLET_TRANSACTION_FAILURE, error: error.message });
    }
};
export const depositmoney = ({jwt,orderid,paymentid,navigate}) => async (dispatch) => {
    dispatch({ type: action.DEPOSIT_MONEY_REQUEST });

    try {
        const response = await api.put("/api/wallet/deposit", null, {
            params: {
                order_id: orderid,
                payment_id:paymentid,
            },
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });

        dispatch({
            type: action.DEPOSIT_MONEY_SUCCESS,
            payload: response.data,
        });
        navigate("/wallet");
        console.log(response.data);
    } catch (error) {
        console.log("error at wallet action.js", error);
        dispatch({
          type: action.DEPOSIT_MONEY_FAILURE,
          error: error.message,
        });
    }
};
export const paymenthandler = ({jwt,amount,paymentMethod}) => async (dispatch) => {
    dispatch({ type: action.DEPOSIT_MONEY_REQUEST });

    try {
        const response = await api.post(
        `/api/payment/${paymentMethod}/amount/${amount}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

      window.location.href = response.data.payment_url;
      
        
    } catch (error) {
        console.log("error at wallet action.js", error);
        dispatch({
          type: action.DEPOSIT_MONEY_FAILURE,
          error: error.message,
        });
    }
};



export const transfermoneytodiffwallet =
  ({ jwt, walletid, reqdata }) =>
  async (dispatch) => {
    dispatch({ type: action.TRANSFER_MONEY_REQUEST });

    try {
      const response = await api.put(`/api/wallet/${walletid}/transfer`, reqdata, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: action.TRANSFER_MONEY_SUCCESS,
        payload: response.data,
      });
      
      console.log("transfer money succesfully",response.data);
    } catch (error) {
      console.log("error at wallet action.js", error);
      dispatch({
        type: action.TRANSFER_MONEY_FAILURE,
        error: error.message,
      });
    }
  };


