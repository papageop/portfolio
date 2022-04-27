import './index.css';
import MyPDF from '../../assets/cv-Paraskevi-Papageorgiou.pdf';

function Buttons() {
    return (
        <div className='container button-container'>
            <a href={MyPDF} download="Paraskevi_Papageorgiou_CV.pdf" className='btn pri'>
                Download CV
            </a>
            <a href='#contact' className='btn sec'>
                Get in Touch
            </a>
        </div>
    )
}

export default Buttons;