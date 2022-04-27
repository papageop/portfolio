import './index.css';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialGithub } from 'react-icons/ti';
import { AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <div id="footer" className='container footer-container'>
            <h1>
                That's all
            </h1>
            <div className='social-links'>
                <a href='https://www.linkedin.com/in/paraskevipapageorgiou-2a47091b2'>
                    <AiOutlineLinkedin className='social' />
                </a>
                <a href='https://github.com/papageop/'>
                    <TiSocialGithub className='social' />
                </a>
                <a href='https://www.instagram.com/accounts/login/?next=/papageorgiou_vivi/'>
                    <BsInstagram className='social' />
                </a>
                {/* <a href=''>
                    <FaFacebookF className='social' />
                </a> */}
            </div>
        </div>
    )
}

export default Footer;