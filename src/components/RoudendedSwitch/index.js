import './index.css';
function RoundedSwitch({value,onChange}) {
    return (
        <div className="toggle-theme-wrapper" >
            <span>☀️</span>
            <label className="switch">
                <input type="checkbox" checked={value} onChange={onChange}/>
                <span className="slider-switch round"></span>
            </label>
            <span>🌒</span>
        </div>
    )
}

export default RoundedSwitch;