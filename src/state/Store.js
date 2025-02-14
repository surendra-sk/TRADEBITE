import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk"
import authReducer from "./Auth/Reducer";
import coinReducer from "./Coin/Reducer";
import { walletreducer } from "./wallet/Reducer";
import { orderreducer } from "./Order/Reducer";
import { assetreducer } from "./asset/Reducer";
import { watchlistreducer } from "./watchlist/Reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  coin: coinReducer,
  wallet: walletreducer,
  order: orderreducer,
  asset: assetreducer,
  watchlist:watchlistreducer,
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))