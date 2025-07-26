
import React from 'react';
import Cart from './Cart';
import './Cart.css';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { Itemname: 'Laptop', Price: 75000 },
      { Itemname: 'Phone', Price: 35000 },
      { Itemname: 'Headphones', Price: 2000 },
      { Itemname: 'Charger', Price: 500 },
      { Itemname: 'Smart Watch', Price: 5000 }
    ];
  }

  render() {
    return (
      <div className="cart-wrapper">
        <h1 style={{ textAlign: 'center', color: 'green' }}>Online Shopping Cart</h1>
        {this.items.map((item, index) => (
          <Cart key={index} Itemname={item.Itemname} Price={item.Price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
