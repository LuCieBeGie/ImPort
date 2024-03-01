import { useDispatch, useSelector } from "react-redux"
import './Projects.css';
import { Element } from "react-scroll";

function Projects() {
    const dispatch = useDispatch()
    const { myProjects } = useSelector(state => state.projects)
    return (<>
        <Element
            id="projects"
            className="project_background projects"
            name="projects">
            <h1>My Projects</h1>
            <figure className="project_container">
                {myProjects.map((project, projectId) => {
                    return <div key={projectId} className="division" >
                        <span className="image_wrapper">
                            <img
                                src={process.env.PUBLIC_URL + project.image}
                                alt='project image' />
                        </span>
                        <figcaption>
                            <h2>{project.name}</h2>
                            <p style={{fontSize:'large'}}>{project.description}</p>
                            <br />
                            <a href={project.url} target="_blank" className="gitLink">GitHub 👉</a>
                        </figcaption>
                    </div>
                })}
            </figure>
        </Element>
    </>)
}

export default Projects