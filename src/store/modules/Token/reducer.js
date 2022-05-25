import { TOKEN_USER } from "./actionTypes";

const defaultState = localStorage.getItem("@KenzieHub/Token") || ""

const tokenReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOKEN_USER:
            return action.token
        default:
            return state
    }
}

export default tokenReducer