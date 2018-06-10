import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }
  

  render() {
    return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
      </div>
      <div>
        <button onClick={() => this.setState({hyva: this.state.hyva + 1})}>hyvä</button>
        <button onClick={() => this.setState({neutraali: this.state.neutraali + 1})}>neutraali</button>
        <button onClick={() => this.setState({huono: this.state.huono + 1})}>huono</button>
      </div>
      <div>
        <h1>Statistiikka</h1>
      </div>
      <div>
        <p>Hyvä {this.state.hyva}</p>
        <p>Neutraali {this.state.neutraali}</p>
        <p>Huono {this.state.huono}</p>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

