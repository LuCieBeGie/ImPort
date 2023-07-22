import { skillState } from "./state";
import { GET_MY_TECKSKILLS, GET_MY_SOFT_SKILLS } from "./type";

export const mySkillReducer = (state = skillState, option) => {
    switch (option.type) {
        case GET_MY_TECKSKILLS:
            state.myTechnicalSkills = option.payload;
            break;
        case GET_MY_SOFT_SKILLS:
            state.mySoftSkills = option.payload;
        default:
            break;
    }
    return { ...state }
}