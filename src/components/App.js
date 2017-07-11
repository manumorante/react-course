// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';
import {Button} from 'react-bootstrap';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;

    return (
      <main className="container">
        <Header title="React" items={items} />
        <Content body={children} />
        <Footer />
        <Button bsStyle="primary">Primary</Button>
      </main>
    );
  }
}

export default App;
