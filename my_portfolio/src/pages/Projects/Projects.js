import { useDispatch, useSelector } from "react-redux"
import './Projects.css';

function Projects() {
    const dispatch = useDispatch()
    const { myProjects } = useSelector(state => state.projects)
    return (<>
        <div className="project_background">

            <h1>My Projects</h1>
            <figure className="">
                {myProjects.map((project, projectId) => {
                    return <div key={projectId} className="division" >
                        <span className="image_wrapper">
                            <img
                                // style={{ width: 150, height: 100 }}
                                src={process.env.PUBLIC_URL + project.image}
                                alt='project image' />
                        </span>
                        <figcaption>
                            <h2>{project.name}</h2>
                            <span>{project.description}</span>
                            <br />
                            <a href={project.url} target="_blank">GitHub 👉</a>
                        </figcaption>
                    </div>
                })}
            </figure>
        </div>
    </>)
}

export default Projects