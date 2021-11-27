import ReactDOM from "react-dom";


export default function ClockHook(props) {

    var activateLasers = () => console.log("booom");
    

    return (
      <div>
        <h2>Second Clock</h2>
        <button onClick={activateLasers}>
            Activate Lasers
        </button>
      </div>
    );
  }
  
 
