import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import './Skills.css'
import { useState } from "react";
import { Element } from "react-scroll";

function Skills() {
    const dispatch = useDispatch()
    const { myTechnicalSkills } = useSelector(state => state.skills)
    const { mySoftSkills } = useSelector(state => state.skills)
    const [isVisible, toggleVisibility] = useState(false);
    const [isVisibleSoftSkills, toggleVisibilitySoftSkills] = useState(false);
    return (<>
        <Element className="background skills" id="skills" name='skills'>
            <div className="button-container">
                <button
                    onClick={() => {
                        toggleVisibility(!isVisible);
                        toggleVisibilitySoftSkills(false)
                    }}>
                    Technical Skills
                </button>
                <button onClick={() => {
                    toggleVisibilitySoftSkills(!isVisibleSoftSkills)
                    toggleVisibility(false)
                }}>Personal Skills</button>
            </div>
            <figure className="skill">
                {
                    isVisible && myTechnicalSkills.map((skill, skillId) => {
                        return <div className="shownSkill" alt={skill.title} key={skillId}>
                            {/* <hr /> */}
                            <span><img src={process.env.PUBLIC_URL + skill.image} alt={skill.title} /></span>
                            <span>{skill.title}</span>
                        </div>
                    })
                }
            </figure>
            {
                isVisibleSoftSkills && mySoftSkills.map((sSkill, sSkillId) => {
                    return <h1 key={sSkillId}> {sSkill.name}</h1>
                })
            }
        </Element>
    </>)
}

export default Skills