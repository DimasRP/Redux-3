import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
const rootReducer = combineReducers({
    dataUser: DataReducer
})

export default rootReducer