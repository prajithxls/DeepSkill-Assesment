
import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <h3>Item: {this.props.Itemname}</h3>
        <p>Price: ₹{this.props.Price}</p>
      </div>
    );
  }
}

export default Cart;
