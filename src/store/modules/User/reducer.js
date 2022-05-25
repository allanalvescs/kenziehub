import { LOGIN_USER } from "./actionTypes"

const defaultState = JSON.parse(localStorage.getItem("@KenzieHub/User")) || {}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.payload
        default:
            return state
    }
}

export default UserReducer