import { combineReducers } from "redux";
import { mySkillReducer } from "./skills/reducer";

export default combineReducers({
    techSkills: mySkillReducer,
})
