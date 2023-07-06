import { skillState } from "./state";
import { GET_MY_TECKSKILLS } from "./type";

export const mySkillReducer = (state = skillState, option) => {
    switch (option.type) {
        case GET_MY_TECKSKILLS:
            state.myTechnicalSkills = option.payload;
            break
        default:
            break;
    }
    return { ...state }
}