import { ADD_TECHS, DELETE_TECH, DISPLAY_TECHS, UPDATE_TECH } from "./actionTypes";

export const addTechs = (tech) => ({
    type: ADD_TECHS,
    tech
})

export const displayTechs = (techs) => ({
    type: DISPLAY_TECHS,
    techs
})

export const updatedTech = (techupdated) => ({
    type: UPDATE_TECH,
    techupdated
})

export const deleteTech = (techDeleted) => ({
    type: DELETE_TECH,
    techDeleted
})