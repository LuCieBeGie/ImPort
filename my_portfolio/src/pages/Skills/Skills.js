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
            <div className="button-container">
                <button
                    onClick={() => {
                        console.log(myTechnicalSkills);
                        toggleVisibility(!isVisible)
                    }}>
                    Technical Skills
                </button>
                <button>Personal Skills</button>
            </div>
            <figure >
                {
                    isVisible && myTechnicalSkills.map((skill, skillId) => {
                        console.log(skill.image);
                        return <div className="shownSkill" alt={skill.title} key={skillId}>
                            <hr />
                            <span><img src={process.env.PUBLIC_URL + skill.image} alt={skill.title} /></span>
                            <span>{skill.title}</span>
                        </div>
                    })
                }
            </figure>
        </div>
    </>)
}

export default Skills