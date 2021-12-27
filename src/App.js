import React, { Component } from 'react';
import Header from './components/Header';
import './app.scss';

class App extends Component {

  state = {
    titre: 'Mon Cv en ligne - Manfred P.',
  }

  render() {
    return (
      <>
        <Header title={this.state.titre} />
      </>
    );
  }
}

export default App;