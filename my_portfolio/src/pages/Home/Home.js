import './Home.css'

function Home() {

    return (<>
        <section className="container">
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
        </section>
    </>)
}

export default Home