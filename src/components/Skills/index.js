import ProgressBar from "../ProgressBar";
import './index.css'


function Skills({ data }) {
    return (
        <div id="skills" className="container skills-container">
            {data.map(({ text, percent, image }, i) => (
                <div className="item" key={"skill_" + i + "_" + text}>
                    <img src={image} alt="" width={40} height={30} />
                    <h4>{text}</h4>
                    <div className="progress-bar-container">
                        <ProgressBar
                            isLoading={false}
                            percent={percent}
                            size={"medium"}
                            showInfo={true}
                        />
                    </div>
                </div>))}
        </div>
    )
}

export default Skills