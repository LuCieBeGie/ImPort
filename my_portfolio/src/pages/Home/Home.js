import { Element } from 'react-scroll'
import './Home.css'

function Home() {

    return (<>
        <Element className="container" id='home'>
            <div className="triangle">
                <div>
                    <h1>Hi, I'm Lusine,
                        <br />Junior Web Developer
                    </h1>
                    <button className='download'>
                        <a href={require('../../assets/pdf/CV.pdf')} download="myFile">
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </Element>
    </>)
}

export default Home