import React from "react";
import './index.css';

const ProgressBar = (props) => {
    const {
        percent,
        size = "small",
        showInfo = false
    } = props;

    return (
            <div className="progress-outer">
                <div
                    className={`progress ${size ? "progress--" + size : ""}` }
                >
                    <div className={`progress-bar`} style={{ width: percent + "%" }}></div>
                </div>

                { showInfo ? (
                    <span className="progress-info">{percent}%</span>
                ) : (
                    ""
                )}
            </div>
        
    );
};

export default ProgressBar;
