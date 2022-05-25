
import { ADD_TECHS, DELETE_TECH, DISPLAY_TECHS, UPDATE_TECH } from "./actionTypes";

const techsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TECHS:
            return [...state, action.tech]
        case UPDATE_TECH:
            return [...action.techupdated]
        case DELETE_TECH:
            return [...action.techDeleted]
        case DISPLAY_TECHS:
            return [...action.techs]
        default:
            return state
    }
}
export default techsReducer