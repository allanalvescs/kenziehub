import api from "../../../Services/api"
import { addToken } from "../Token/action"
import { loginUser } from "./actions"

const loginUserThunk = (payload) => (dispatch) => {
    api.post("/sessions", payload)
        .then(resp => {
            localStorage.setItem("@KenzieHub/User", JSON.stringify(resp.data.user))
            localStorage.setItem("@KenzieHub/Token", resp.data.token)
            dispatch(loginUser(resp.data.user))
            dispatch(addToken(resp.data.token))
        }).catch(err => console.log(err))
}

export default loginUserThunk