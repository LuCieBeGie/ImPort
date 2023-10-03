import { projectState } from "./state";
import { GET_MY_PROJECTS } from "./type";

export const projectReducer = (state = projectState, option) => {
    switch (option.type) {
        case GET_MY_PROJECTS:
            state.myProjects = option.payload;
            break;
        default: break;

    }
    return { ...state }
}