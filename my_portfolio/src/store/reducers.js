import { combineReducers } from "redux";
import { mySkillReducer } from "./skills/reducer";
import { projectReducer } from "./projects/reducer";

export default combineReducers({
    skills: mySkillReducer,
    projects: projectReducer,
})
