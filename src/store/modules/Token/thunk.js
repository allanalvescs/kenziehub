import api from "../../../Services/api"
import { addToken } from "./action"

const addTokenThunk = (payload) => (dispath) => {
    api.post("/sessions", payload)
        .then(resp => {
            localStorage.setItem("@KenzieHub/Token", resp.data.token)
            dispath(addToken(resp.data.token))
        })
        .catch(err => console.log(err))
}

export default addTokenThunk