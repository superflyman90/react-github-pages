import React, { Component } from 'react';
import Header from './components/Header';
import Biographie from './components/Biographie';
import './app.scss';

class App extends Component {

  state = {
    titre: 'Mon Cv en ligne - Manfred P.',
  }

  render() {
    return (
      <>
        <Header title={this.state.titre} />
        <hr></hr>
        <Biographie />
      </>
    );
  }
}

export default App;