import './index.css';
import Buttons from '../Button';
import img from '../../assets/womandev.jpg'
function Home() {

    return (
        <div id="home" className='container home-container'>
            <div className='logo'>
                <div className='main-img' onMouseEnter={() => {
                    const toggle = document.querySelector('.main-img');

                    toggle.classList.toggle('active');
                }}
                    onMouseLeave={() => {
                        const toggle = document.querySelector('.main-img');

                        toggle.classList.toggle('active');
                    }}>
                    <div className='circle'>
                    </div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                </div>
                <img src={img} alt='' />
            </div>
            <div className='scroll-down'>
                <hr />
                <h5>Welcome</h5>
                <hr />
            </div>
            <h2>
                <span>About Me</span> <br />
                <p>
                    Graduated from the Department of Informatics of the Aristotle University of
                    Thessaloniki. Full-stack developer interested in building projects using Node.js, React, and Drupal with proven skills. Ability to learn quickly and adjust to high-pressure environments.
                     Always trying to improve myself and become a better engineer.                </p>
            </h2>
            <Buttons />
        </div>
    )
}



export default Home;