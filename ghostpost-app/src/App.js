import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [{name: 'Pikachu'}, {name: 'Snorlax'}]
    }
  }
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + 'http://127.0.0.1:8000/api/', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.pokemon.map(p => {
            return (<li>{p.title}</li>)
          })}
        </ul>
      </div>
    );
  }

}

export default App;
