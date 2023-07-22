import { GET_MY_TECKSKILLS, GET_MY_SOFT_SKILLS } from "./type";

export function getMyTeckSkills(data) {
    return {
        type: GET_MY_TECKSKILLS,
        payload: data,
    }
}
export function getMySoftSkills(data) {
    return {
        type: GET_MY_SOFT_SKILLS,
        payload: data
    }
}


