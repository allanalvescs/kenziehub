import api from "../../../Services/api"
import { addTechs, deleteTech, displayTechs, updatedTech } from "./action"

const token = localStorage.getItem("@KenzieHub/Token")

export const displayTechsThunk = () => (dispatch, getState) => {
    const { user } = getState()
    api.get(`/users/${user.id}`)
        .then((resp) => dispatch(displayTechs(resp.data.techs)))
}

export const addTechThunk = (tech, setError) => (dispatch) => {
    setError(false)

    api.post("/users/techs", tech, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(resp => {
            dispatch(addTechs(resp.data))
        })
        .catch(_ => setError(true))
}


export const updatedTechThunk = (techID, status) => (dispatch, getState) => {
    const { techs } = getState();

    api.put(`/users/techs/${techID}`, status, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(resp => {
        const locationTech = techs.find(tech => tech.id === resp.data.id);
        const updatedTechs = techs.filter(tech => tech.id !== locationTech.id);

        dispatch(updatedTech([...updatedTechs, resp.data]))
    })
        .catch(err => console.log(err))
}


export const deleteTechThunk = (techID) => (dispatch, getState) => {
    const { techs } = getState();

    api.delete(`/users/techs/${techID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const techNotDeleted = techs.filter(tech => tech.id !== techID);
    dispatch(deleteTech(techNotDeleted))
}