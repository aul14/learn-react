import React, { Component, Fragment, useEffect, useState } from "react";
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

//     componentDidMount() {
//         document.title = `Title change ${this.state.count}`;
//     }

//     componentDidUpdate() {
//         document.title = `Title change ${this.state.count}`;
//     }

//     componentWillUnmount() {
//         document.title = `React App`;
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

    useEffect(() => {
        document.title = `Title change ${count}`;
        return () => {
            document.title = `React App`;
        }
    });

    return (
        <div className="p-hooks">
            <p>Nilai saya adalah: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update nilai</button>
        </div>
    )
}
export default Hooks;