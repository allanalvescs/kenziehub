import { TARGET_TECH } from "./actionTypes";

const techReducer = (state = {}, action) => {
    switch (action.type) {
        case TARGET_TECH:
            return action.tech
        default:
            return state
    }
}

export default techReducer;