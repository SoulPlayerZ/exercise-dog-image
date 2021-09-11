/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '',
      L: true,
    };
  }

  componentDidMount() {
    this.dog = fetch('https://dog.ceo/api/breeds/image/random')
      .then((promise) => promise.json())
      .then((promise) => {
        this.setState({
          image: promise.message,
          L: false,
        });
      });
  }

  render() {
    const { image, L } = this.state;
    const Loading = 'Loading nenem...';
    return (
      <section>
        {L ? <p>{ Loading }</p> : <img src={ image } className="App-logo" alt="logo" />}
        <button type="button" id="dog-btn">New Doguinho</button>
      </section>
    );
  }
}

export default App;
