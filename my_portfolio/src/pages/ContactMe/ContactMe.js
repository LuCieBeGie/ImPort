import { useDispatch, useSelector } from "react-redux"

function ContactMe() {
    const dispatch = useDispatch()
    const { myProjects } = useSelector(state => state.projects)
    const odds = myProjects.filter(project => project.id % 2 === 0)
    console.log(odds);
    return (
        <>
            <figure >
                {
                    odds.map((proj, pId) => {
                        return <div className="shownSkill" alt={proj.title} key={pId}>
                            <hr />
                            <span>
                                <img src={process.env.PUBLIC_URL + proj.image} alt={proj.title} />
                            </span>
                        </div>
                    })
                }
            </figure>
        </>)
}

export default ContactMe