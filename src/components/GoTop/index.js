import { AiOutlineArrowUp } from 'react-icons/ai';
import "./index.css";

const GoTop = (props) => {

    return (
        <>
            <div className={props.showGoTop} onClick={props.scrollUp}>
                <button>
                    <AiOutlineArrowUp />
                </button>
            </div>
        </>
    );
};
export default GoTop;