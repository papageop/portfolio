import './index.css';
// import { AiOutlineFacebook } from 'react-icons/ai';
// import { AiOutlineInstagram } from 'react-icons/ai';
// import { AiOutlineYoutube } from 'react-icons/ai';
import ContactForm from './components/ContactForm';

function Contact() {
    return (
        <div id='contact' className='container contact-container'>
            <h1>Contact me</h1>
            <ContactForm/>
            {/* <div className='contact-links'>
                <a href='' className='contact facebook'>
                    <AiOutlineFacebook className='icon'/>
                    <h2>Facebook <span>Vivi</span></h2>
                </a>
                <a href='' className='contact instagram'>
                    <AiOutlineInstagram className='icon'/>
                </a>
                <a href='' className='contact youtube'>
                    <AiOutlineYoutube className='icon'/>
                </a>
            </div> */}
        </div>
    )
}

export default Contact;