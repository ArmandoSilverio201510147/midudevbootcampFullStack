import { useState } from "react";
import ReactDOM  from "react-dom";
import "./index.css";

const WarningNotUse = () =>{
    return <h1>Comnponent is not used still</h1>
};

const ListOfClicks = ({clicks}) => {
    console.log({clicks});
    
    return <p>{clicks.join(", ")}</p>
};

const App = () => {
    //const [left, setLeft] = useState(0);
    //const [right, setRight] = useState(0);
    const [clicks, setClicks] = useState([]);

    const handleClickLeft = (event) => {
        setClicks((prevClicks) => [...prevClicks, 'L']);
    };
    const handleClickRight = () => {
        setClicks((prevClicks) => [...prevClicks, 'R']);
    };

    const handleReset = () =>{
        setClicks([]);
    };
    const left = clicks.filter(click => click === 'L');
    const right = clicks.filter(click => click === 'R');

    return ( 
        <div>
            {left.length}
            <button onClick={handleClickLeft}>left</button>
            <button onClick={handleClickRight}>right</button>
            {right.length}
            <p>
                <button onClick={handleReset}>Reset</button>
            </p>
            <p>Total Clicks: {clicks.length}</p>
            {clicks.length === 0
            ? (<WarningNotUse />): (<ListOfClicks clicks={clicks}/>)}
        </div>
    )

}
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);