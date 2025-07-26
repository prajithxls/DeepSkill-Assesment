import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={{
        width: '400px',
        margin: '50px auto',
        border: '2px solid green',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial'
      }}>
        <h2 style={{ color: 'green' }}>Mall Entry Counter</h2>
        <p><strong>People Entered:</strong> {this.state.entryCount}</p>
        <p><strong>People Exited:</strong> {this.state.exitCount}</p>
        <div style={{ marginTop: '20px' }}>
          <button onClick={this.updateEntry} style={{ marginRight: '10px', padding: '10px 20px' }}>
            Login
          </button>
          <button onClick={this.updateExit} style={{ padding: '10px 20px' }}>
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
