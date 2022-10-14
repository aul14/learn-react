import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import ActionType from "../../../redux/reducer/GlobalActionType";
import { rootContext } from "../../Home/Home";

class Counter extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {    
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }

    changeTextNull = () => {
        return null;
    }

    render(){
        // STATE MANAGEMENT MENGGUNAKAN REDUX
        // return (
        //     <div className="counter">
        //         <button className="minus" onClick={this.props.handleMinus}>-</button>
        //         <input type="text" value={this.props.order} onChange={this.changeTextNull} />
        //         <button className="plus" onClick={this.props.handlePlus}>+</button>
        //     </div>
        // )
        return (
            <rootContext.Consumer>
                {
                    value => {
                       return (
                            <div className="counter">
                                <button className="minus" onClick={() => value.dispatch({ type: "MINUS_ORDER" })}>-</button>
                                <input type="text" value={value.state.totalOrder} onChange={this.changeTextNull} />
                                <button className="plus" onClick={() => value.dispatch({ type: "PLUS_ORDER" })}>+</button>
                            </div>
                       )
                    }
                }
            </rootContext.Consumer>
        )
    }
}

// STATE MANAGEMENT MENGGUNAKAN REDUX
// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//         handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;