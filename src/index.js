import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
           hello world 
        </div>
    );
};
//This links your entry component to your public html
ReactDOM.render(<App />, document.getElementById("app"));
export default App;