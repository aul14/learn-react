import React, { Component, Fragment, useState } from "react";
import './Hooks.css';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
    
//     render() {
//         return (
//             <Fragment>
//                <div className="p-hooks">
//                     <p>Nilai saya adalah: {this.state.count}</p>
//                     <button onClick={this.onUpdate}>Update nilai</button>
//                </div>
//             </Fragment>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="p-hooks">
            <p>Nilai saya adalah: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update nilai</button>
        </div>
    )
}
export default Hooks;