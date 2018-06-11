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
    console.log('Here', this.state.hyva);
    this.setState({hyva: this.state.hyva + 1}, function() {this.laskeTilastot()})
  }

  lisaaNeutraali = () => {
    this.setState({neutraali: this.state.neutraali + 1}, function() {this.laskeTilastot()})
  }

  lisaaHuono = () => {
    this.setState({huono: this.state.huono + 1}, function() {this.laskeTilastot()})
  }

  laskeKeskiarvo = () => {
    console.log('Here');
    const laskettuArvo = ((this.state.hyva * 1 + this.state.huono * -1) 
    / (this.state.hyva + this.state.neutraali +  this.state.huono)).toPrecision(1)
    console.log('Here', laskettuArvo);
    this.setState({keskiarvo: laskettuArvo})  
  }

  laskePositiiviset = () => {
    const laskettuArvo = ((this.state.hyva * 1)
    / (this.state.hyva + this.state.neutraali +  this.state.huono)).toPrecision(2)
    console.log('Here', laskettuArvo);
    this.setState({positiivisia: laskettuArvo}) 
  }
  laskeTilastot = () => {
    this.laskeKeskiarvo()
    this.laskePositiiviset()
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
        <p>positiivisia {this.state.positiivisia} %</p>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

