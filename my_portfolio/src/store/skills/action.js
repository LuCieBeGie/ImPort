import { GET_MY_TECKSKILLS, HIDE_MY_SKILLS } from "./type";

export function getMyTeckSkills(data) {
    return {
        type: GET_MY_TECKSKILLS,
        payload: data,
    }
}
// export function toggleMySkill(data) {
//     return {
//         type: HIDE_MY_SKILLS,
//         payload: data
//     }
// }


