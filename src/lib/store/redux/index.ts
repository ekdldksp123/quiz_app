import timer from "./timer";
import { combineReducers } from "redux";

// timer를 Redux에 연결
const rootReducer = combineReducers({ timer });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;