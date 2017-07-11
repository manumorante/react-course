// Dependencies
import React, { Component } from 'react';

// Assets
import './css/Content.css';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      count: 1
    });
  }

  handleCountClick(e) {
    switch(e.target.id) {
      case 'add':
        this.setState({ count: this.state.count + 1 });
        break;

      case 'remove':
        if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
        break;

      case 'rest':
      default:
        this.setState({ count: 0 });
        break;
    }
  }

  render() {
    return (
      <div className="Content">
        <h1>Counter: {this.state.count}</h1>

        <p>
          <button id="add" onClick={this.handleCountClick}>Add</button>
          <button id="remove" onClick={this.handleCountClick}>Remove</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>
        
        <p>
          <input type="number"/>
        </p>
      </div>
    );
  }
}

export default Content;
