import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';
import {connect} from "react-redux";
import { rootContext } from "../../Home/Home";

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order:newValue
    //     })
    // }

    render(){
        return (
            <rootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <h1>Halaman Product</h1>
                                <hr />
                                <div className="header">
                                    <div className="log">
                                        <img src="https://etanee.id/faviconbaru.ico" alt="" />
                                    </div>
                                    <div className="troley">
                                        <img src="https://etanee.id/static/media/basket-blue.937a12ce.svg" alt="" />
                                        {/* STATE MANAGEMENT MENGGUNAKAN REDUX */}
                                        {/* <div className="count">{this.props.order}</div> */}
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
            
                                {/* CHILD COMPONENT */}
                                <CardProduct />
                                {/* <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} /> */}
                            </Fragment> 
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

// export default connect(mapStateToProps)(Product);
export default Product;