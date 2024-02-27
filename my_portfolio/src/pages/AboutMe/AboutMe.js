import emailjs from '@emailjs/browser';
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import image from '../../assets/images/about_me.png'
import './AboutMe.css'
import { Element } from 'react-scroll';

function AboutMe() {
    const [isLoaded, setLoaded] = useState(false);
    const springProps = useSpring({
        opacity: 1,
        duration: 5000,
        delay: 2000,
        reset: isLoaded,
        transform: 'translateX(0px)',
        from: {
            opacity: 0,
            transform: 'translateX(-250px)'
        }
    });
    const imgSpringProps = useSpring({
        opacity: 1,
        delay: 2000,
        duration: 5000,
        reset: isLoaded,
        transform: 'translateX(0px)',
        from: {
            opacity: 0,
            transform: 'translateX(250px)'
        }
    })

    useEffect(() => {
        setLoaded(true);
    }, [])

    const style = {
        // position: 'relative',
        padding: '10px',
        width: '100%',
        minHeight: '350px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const genStyles = {
        width: '45%',
        margin: '4%',
        position: 'absolute',
        fontSize: '1.5em',
        flex: '1',
        padding: '3%',
        borderRadius: '10px',
        boxSizing: 'border-box',
        zIndex: '1000',
        background: 'linear-gradient(to right, rgb(0, 0, 0, 0.5), rgb(255, 255, 255, 0.2)',
        boxShadow: '2px 2px 15px -5px rgb(255, 255, 255)',
        fontSize: 'large',
        color: 'white',
        margin: '2%',
    }

    const textStyle1 = {
        top: '0',
        right: '0',
        width: '50%',
    }
    const textStyle2 = {
        left: '0',
        bottom: '0',
        width: '50%',
    }

    return (<>
        <Element id='aboutMe' className="about" name="about">
            <animated.div className='about_me bckImg' style={{ ...imgSpringProps }}>
                <img className='styleImg bckImg' />
            </animated.div>
            {isLoaded ?
                <div className='main_container' style={style}>
                    <animated.div
                        style={{ ...genStyles, ...textStyle1, ...imgSpringProps }}>
                        <img src={image} className='selfImg' />
                        <h2>About Me</h2>
                        <hr />
                        <p>
                            I'm a junior web developer now based in Alicante, Spain, but I am Armenian by nationality. I've spent the past 14 years studying and working in quite different fields. I'm contented that those years didn't disappoint me, but made me more purposeful and persevering. I have a bachelor degree in linguistics, but i never actually worked in the field of studies. Although I should confess that my linguistic skills benefited me greatly in my previous jobs. Most of working experience I gained experience at the Yerevan airport since my student years. To say that the experience of those years played any role in my career would be the biggest lie, but I can't help but admit that there I made real friends and very important human qualities that will surely accompany me throughout my life.
                        </p>
                    </animated.div>
                    <animated.div
                        style={{ ...genStyles, ...textStyle2, ...springProps }} >
                        <hr />
                        <p>
                            My last work experience in the bank as a fraud monitoring specialist was the bridge that led me to the IT world.
                            It's been a year since I took a break from work to gain more knowledge in my web programming and to relax a bit after 11 years of non-stop work.
                            In addition to all this, I can now confidently say that it is already the right time to apply the knowledge gained in the last two years in real projects, because I am more than sure that programming is one of the fewest areas where the chances of mastering it completely depends how much work experience you have, it is an area in which one should/can never stop learning.
                        </p>
                    </animated.div>
                </div>
                : <p></p>}
        </Element >
    </>

    )
}

export default AboutMe