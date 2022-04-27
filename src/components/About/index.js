import './index.css';
import Timeline from '../Timeline';
import Skills from '../Skills';
const codingdata = [
    {
         image:require('../../assets/react.png'),
        text: 'React',
        percent: 94
    },
    {
        image:require('../../assets/javascript.png'),
        text: 'Javascript',
        percent: 90
    },
    {
        image:require('../../assets/java.png'),
        text: 'Java',
        percent: 82
    },
    {
        image:require('../../assets/html.png'),
        text: 'HTML/CSS',
        percent: 96
    },
    {
        image:require('../../assets/python.jpg'),
        text: 'Python',
        percent: 88
    },
    {
        image:require('../../assets/android.png'),
        text: 'Android',
        percent: 40
    },
    {
        image:require('../../assets/drupal.png'),
        text: 'Drupal',
        percent: 70
    },
    {
        image:require('../../assets/sql.png'),
        text: 'SQL',
        percent: 85
    },
    {
        image:require('../../assets/graphql.png'),
        text: 'GraphQL',
        percent: 80
    },
    {
        image:require('../../assets/nodejs.png'),
        text: 'Node.js',
        percent: 70
    },

]

const operatingsystems = [
    {
         image:require('../../assets/windows.png'),
        text: 'Windows 10',
        percent: 90
    },
    {
        image:require('../../assets/ubuntu.png'),
        text: 'Linux Ubuntu',
        percent: 80
    },
    {
        image:require('../../assets/mac.png'),
        text: 'MacOS',
        percent: 60
    }
]
function About(){
    return(
        <div id="about" className=''>
            <Timeline/>
            <h1>Coding Skills</h1>
            <Skills data={codingdata}/>
            <h1>Operating Systems</h1>
            <Skills data={operatingsystems}/>

        </div>
    )
}
export default About;