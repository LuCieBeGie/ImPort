import { useDispatch, useSelector } from "react-redux"
import './Skills.css'
import { GET_MY_TECKSKILLS } from "../../store/skills/type";
import { useState } from "react";

function Skills() {
    const dispatch = useDispatch()
    const { myTechnicalSkills } = useSelector(state => state.techSkills)
    const [isVisible, toggleVisibility] = useState(false);

    return (<>
        <div className="background">
            <button
                onClick={() => {
                    console.log(myTechnicalSkills);
                    toggleVisibility(!isVisible)
                }}>Technical Skills</button>
            <button>Personal Skills</button>
            <br />
            {
                isVisible && myTechnicalSkills.map((skill, skillId) => {
                    return <div className="shownSkill" alt={skill.title} key={skillId}>
                        <hr />
                        <span>{skill.title}</span>
                        <span><img src={skill.url} alt={skill.title} /></span>
                    </div>
                })
            }
        </div>
    </>)
}

export default Skills