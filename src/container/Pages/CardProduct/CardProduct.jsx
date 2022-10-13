import React, {Component} from "react";
import Counter from "./Counter";

class CardProduct extends Component {
    render(){
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee.id/static/media/salad_sayur.df18ccc9.jpg" alt="" />
                    </div>
                    <p className="product-title">Daging Ayam Rasa Original</p>
                    <p className="product-price">Rp. 410.000</p>

                    {/* <Counter onCounterChange={(value) => this.props.onCounterChange(value)} /> */}
                    <Counter />
                </div>
        )
    }
}

export default CardProduct;