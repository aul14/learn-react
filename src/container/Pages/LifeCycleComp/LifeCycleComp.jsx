import React, {Component, Fragment} from "react";
import './LifeCycleComp.css';
import {connect} from "react-redux";

class LifeCycleComp extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps (props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount () {
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // },5000)
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.group('shouldComponentUpdate');
        // console.log('nextProps: ',nextProps);
        console.log('nextState: ',nextState);
        console.log('this state: ',this.state);
        console.groupEnd();

        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate (prevProps, prevState, snapShot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount () {
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render');
        return (
            <Fragment>
                <h1>Halaman Lifecycle</h1>
                <hr />
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr />
                {/* STATE MANAGEMENT MENGGUNAKAN REDUX */}
                {/* <h1>Total Order = {this.props.order}</h1> */}
                <h1>Total Order = xxx</h1>
            </Fragment>
            )
    }
}

// STATE MANAGEMENT MENGGUNAKAN REDUX
// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComp);
export default LifeCycleComp;