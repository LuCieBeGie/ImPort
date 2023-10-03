import { useDispatch, useSelector } from "react-redux"

function Projects() {
    const dispatch = useDispatch()
    const { myProjects } = useSelector(state => state.projects)
    console.log(myProjects);
    return (<>
        <h1>My Projects</h1>
        <figure>
            {myProjects.map((project, projectId) => {
                return <div key={projectId}>
                    <span><img style={{ width: 100, height: 100 }} src={process.env.PUBLIC_URL + project.image} alt='project image' /></span>
                    <h2>{project.name}</h2>
                    <figcaption>{project.description}</figcaption>
                    <a href={project.url} target="_blank">GitHub 👉</a>
                </div>
            })}
        </figure>
    </>)
}

export default Projects