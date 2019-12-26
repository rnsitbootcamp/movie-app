import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { multiClientMiddleware } from "redux-axios-middleware";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import clients from "./clients";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  blacklist: [],
  whitelist: ["auth"],
  keyPrefix: "movie-app",
  storage
};
const middlewares = [
  thunkMiddleware,
  multiClientMiddleware(clients),
];
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};
