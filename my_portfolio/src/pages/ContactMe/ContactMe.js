import { useDispatch, useSelector } from "react-redux"
import { useSpring, animated } from "react-spring";


function ContactMe() {
    const dispatch = useDispatch()
    const { myProjects } = useSelector(state => state.projects)
    const odds = myProjects.filter(project => project.id % 2 === 0)
    // const image = process.env.PUBLIC_URL + proj.image
    const springProps = useSpring({
        opacity: 1,
        duration: 5000,
        delay: 2000,
        reset: odds,
        transform: 'translateX(0px)',
        from: {
            opacity: 0, transform: 'translateX(-250px)'
        }
    });
    const imgSpringProps = useSpring({
        opacity: 1,
        delay: 2000,
        reset: odds,
        transform: 'translateX(0px)',
        from: { opacity: 0, transform: 'translateX(250px)' }
    })
    const style = {
        position: 'relative',
        padding: '10px',
        width: '100%',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '2px 2px 15px -5px rgb(255, 255, 255)',
    }
    const imgStyle1 = {
        // background: `url("${image}") center center / cover no-repeat`,
        width: '40%',
        height: '45%',
        top: '0',
        right: '0',
    }

    const genStyles = {
        margin: '4%',
        position: 'absolute',
        width: '50%',
        color: 'white',
        fontSize: '15px',
        padding: '3%',
        borderRadius: '10px',
        boxShadow: '2px 2px 15px -5px rgb(255, 255, 255)',
    }

    console.log(odds);
    return (
        <>
            <figure style={style}>
                {
                    odds.map((proj, pId) => {
                        return <div className="shownSkill" alt={proj.title} key={pId}>
                            <hr />
                            <animated.div style={{ ...imgStyle1, ...genStyles, ...imgSpringProps }}>
                                <img src={process.env.PUBLIC_URL + proj.image} alt={proj.title} />
                            </animated.div>
                        </div>
                    })
                }
            </figure>
        </>)
}

export default ContactMe