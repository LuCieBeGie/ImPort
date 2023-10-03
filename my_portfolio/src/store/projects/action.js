import { GET_MY_PROJECTS } from "./type";

export function getMyProjects(data) {
    return {
        type: GET_MY_PROJECTS,
        payload: data
    };
}