import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({hyva, neutraali, huono, keskiarvo, positiivisia}) => {

  return (
    <div>
        <Statistic teksti="Hyvä" arvo={hyva}/>
        <Statistic teksti="Neutraali" arvo={neutraali}/>
        <Statistic teksti="Huono" arvo={huono}/>
        <Statistic teksti="Keskiarvo" arvo={keskiarvo}/>
        <Statistic teksti="Positiivisia" arvo={positiivisia} lopputeksti="%"/>
      </div>
  )
}
const Statistic = ({teksti, arvo, lopputeksti}) => {
  return (
    <p>{teksti} {arvo} {lopputeksti}</p>
  ) 
}



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
    const laskettuArvo = (((this.state.hyva * 1)
    / (this.state.hyva + this.state.neutraali +  this.state.huono)) *100).toPrecision(3)
    console.log('Here', laskettuArvo);
    this.setState({positiivisia: laskettuArvo}) 
  }
  laskeTilastot = () => {
    this.laskeKeskiarvo()
    this.laskePositiiviset()
  }
  

  render() {
    const eiPalautetta = () => {
      if((this.state.hyva + this.state.neutraali + this.state.huono) === 0) {
        return (
          <p>Ei yhtään palautetta</p>
        ) 
      } else {
        return (
          <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} 
          huono={this.state.huono} keskiarvo={this.state.keskiarvo} 
          positiivisia={this.state.positiivisia}/>
        )
      }
    }

    return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
      </div>
      <div>
        <Button handleClick={this.lisaaHyva} text="hyvä"/>
        <Button handleClick={this.lisaaNeutraali} text="neutraali"/>
        <Button handleClick={this.lisaaHuono} text="huono"/>
      </div>
      <div>
        <h1>Statistiikka</h1>
      </div>
      <div>
        {eiPalautetta()}
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

