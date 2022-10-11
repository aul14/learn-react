import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';

class Product extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order:newValue
        })
    }

    render(){
        return (
            <Fragment>
                <div className="header">
                    <div className="log">
                        <img src="https://etanee.id/faviconbaru.ico" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/static/media/basket-blue.937a12ce.svg" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>

                {/* CHILD COMPONENT */}
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;