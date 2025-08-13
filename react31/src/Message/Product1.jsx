import react from 'react';
class Product1 extends react.Component {
    state;
    constructor(props){
        super(props);
        this.state = {
                    name: "Product",
                    price: 100,
                    qty: 1
        };
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 });
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 });
    }
    render() {
        return<div>
            <h3>Product Component</h3>
            <h4>product qty:{this.state.qty}</h4>
            <button onClick={this.decrHandler}>-</button>
            <button onClick={this.incrHandler}>+</button>
        </div>
}
}
export default Product1;
