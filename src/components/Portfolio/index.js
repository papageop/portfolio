import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './index.css';

const projects = [{
    name: "Erasmus Dashboard",
    position: "Front-end (React), Backend (GraphQl)",
    about: "The Erasmus Dashboard is an online tool to support management of Erasmus+ individual student mobilities oversee students (online) Learning Agreements, manage Inter-Institutional Agreements and input data to the Erasmus+ App on the Higher Education Institution (HEI) level.",
    href: "https://erasmus-dashboard.eu/"
},
{
    name: "Learning Languages in the age of Mobility (LLOM)",
    position: "Front-end (React), Backend (Drupal)",
    about: "LLOM aims to promote multilingualism, diversify language teaching and learning opportunities in the EU and ensure accessibility to high quality language learning material and support systems for EU languages.",
    href: "https://uni-foundation.eu/project/llom/"
},
{
    name: "Mobisis",
    position: "Front-end (React), Backend (Node.js, themost framework)",
    about: "Mobisis is an online tool to support creation of Inter-institutional agreements, management of Erasmus+ individual student mobilities inside an organization.",
    href: "https://mobisis.auth.gr/"
},
{
    name:"Sudoku, duidoku, killer sudoku",
    position:"Java",
    about:"An application that implements in Java a library of variations of the 'Sudoku' puzzle. The variants of Sudoku are: a) classic Sudoku 9x9, b) Killer Sudoku 9x9, which defines areas that must have a certain sum, instead of giving cell values, and c) Duidoku 4x4, which is a two-player game, in which users play alternately by placing a number from 1 to 4 on the 4x4 grid, so that the number is unique to the line, column and square 2x2 it belongs to.",
    href:"https://github.com/papageop/java-sudoku-duidoku-killer",
},
{
    name:"Automation Testing using Selenium",
    position:"Java",
    about:"A project in Java JDK 1.8  using Selenium Webdriver which attempts to automate tests for some simple tasks like navigation, sign in, add product to cart etc.",
    href:"https://github.com/papageop/amazon-automation-testing"
},
{
    name:'Search engine',
    position:'Python',
    about:"The purpose of this project is to design and build a simple search engine with all the basic functionality of a real one. It involves subsystems like crawler, indexer amd query processor.",
    href:"https://github.com/papageop/Search-Engine"
}

]
function Portfolio() {
    return (
        <div id="portfolio" className='container portfolio-container'>
            <h1 className='portfolio-txt'>Portfolio Projects</h1>

            <Carousel dynamicHeight={true} showThumbs={false}>
                {projects.map(({ name, position, about, href }, i) => (
                    <div className='portfolio' key={"skill_" + i + "_" + name}>
                        {/* <div className='member-img'></div> */}
                        <div className='portfolio-info'>
                            <h1 className='name'>{name}</h1>
                            <h3 className='position'>{position}</h3>
                            <div className='about'>{about}</div>
                            <a href={href} className='more'>
                                <span>More</span>
                            </a>
                        </div>
                    </div>))}
            </Carousel>


        </div>
    )
}

export default Portfolio;