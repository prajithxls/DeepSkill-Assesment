
import React from 'react';

class EventExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      rupees: '',
      euros: ''
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      this.sayHello();
    });
  };

  sayHello = () => {
    alert("Hello! The counter has been incremented.");
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };

  handleClick = (event) => {
    alert("I was clicked!");
    console.log("Synthetic event object:", event);
  };

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const euro = parseFloat(this.state.rupees) / 90;
    this.setState({ euros: euro.toFixed(2) });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Event Handling Examples</h1>

        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <h3>Say Welcome</h3>
        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <hr />

        <h3>Synthetic Event</h3>
        <button onClick={this.handleClick}>OnPress</button>

        <hr />

        <h3>Currency Converter (INR to Euro)</h3>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
          placeholder="Enter INR"
        />
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euros && (
          <p>Converted Amount: €{this.state.euros}</p>
        )}
      </div>
    );
  }
}

export default EventExample;
