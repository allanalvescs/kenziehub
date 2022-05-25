import { legacy_createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk";

import techReducer from "./modules/TechTarget/reducer";
import techsReducer from "./modules/TechsUser/reducer";
import tokenReducer from "./modules/Token/reducer";
import UserReducer from "./modules/User/reducer";

const reducers = combineReducers({ user: UserReducer, token: tokenReducer, techs: techsReducer, techTarget: techReducer })

const store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store