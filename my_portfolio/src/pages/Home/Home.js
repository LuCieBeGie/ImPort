import React, { useState } from 'react';
import { Element } from 'react-scroll'
import './Home.css'
import Navigation from '../../components/Navigation'
import Header from '../../components/Header'

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        console.log('ok');
        // console.log(isOpen);
    }

    return (<>
        <Navigation isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <div className="container home" id='home' name="home">
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
        </div>
    </>)
}

export default Home