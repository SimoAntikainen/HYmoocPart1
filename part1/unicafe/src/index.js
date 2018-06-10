import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
      positiivisia: 0
    }
  }

  lisaaHyva = () => {
    this.setState({hyva: this.state.hyva + 1})
    this.laskeKeskiarvo()
  }
  lisaaNeutraali = () => {
    this.setState({neutraali: this.state.neutraali + 1})
    this.laskeKeskiarvo()
  }
  lisaaHuono = () => {
    this.setState({huono: this.state.huono + 1})
    this.laskeKeskiarvo()
  }


  laskeKeskiarvo = () => {
    console.log('Here');
    const laskettuArvo = (this.state.hyva * 1 + this.state.huono * -1) 
    / (this.state.hyva + this.state.neutraali +  this.state.huono)
    this.setState({keskiarvo: laskettuArvo})  
  }

  laskePositiiviset = () => {
    
  }
  

  render() {
    return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
      </div>
      <div>
        <button onClick={this.lisaaHyva}>hyvä</button>
        <button onClick={this.lisaaNeutraali}>neutraali</button>
        <button onClick={this.lisaaHuono}>huono</button>
      </div>
      <div>
        <h1>Statistiikka</h1>
      </div>
      <div>
        <p>Hyvä {this.state.hyva}</p>
        <p>Neutraali {this.state.neutraali}</p>
        <p>Huono {this.state.huono}</p>
        <p>keskiarvo {this.state.keskiarvo}</p>
        <p>positiivisia {this.state.positiivisia}</p>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

