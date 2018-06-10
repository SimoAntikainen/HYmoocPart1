import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

/**const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name} you are {props.age} years old</p>
        </div>
    )
}**/

class Hello extends React.Component {
  render() {
    const {name, age} = this.props
    const bornYear = () => new Date().getFullYear() - age

    return (
      <div>
        <p>
          Hello {name}, you are {age} years old <br />
          So you were probably born {bornYear()}
        </p>
      </div>
    )
  }
}

const Footer = () => {
    return (
      <div>greeting app created by <a href="https://github.com/mluukkai">mluukkai</a></div>
    )
  }

  /** 
const App = () => {

    
      const nimi= 'Pekka'
      const ika= 10

      return (
        <div>
          <h1>Greetings</h1>
          <Hello name="Anna"/>
          <Hello name="Pekka"/>
          <Hello name="Jari"/>
          <Hello name="Artp" age={26+10}/>
          <Hello name={nimi} age={ika} />
          <Footer />
        </div>
        
      )}

      */

    
    /**  const App = (props) => {
      const {counter} = props
      return (
        <div>{counter.value}</div>
      )
    }
    
    const counter = {
      value: 1
    }

    const renderoi = () => {
      ReactDOM.render(
        <App counter={counter} />,
        document.getElementById('root')
      )
    }
    
    setInterval(() => {
      renderoi()
      counter.value += 1;
    }, 1000)**/

//ReactDOM.render(<App counter={counter}/>, document.getElementById('root'));


const Display = ({ counter }) => <div>{counter}</div>

/**const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)**/
//Withouth destruction
const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}




    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          counter: 1
        }
        //this.kasvataYhdella = this.kasvataYhdella.bind(this)
        //this.nollaa = this.nollaa.bind(this)

        setInterval(() => {
          this.setState({ counter: this.state.counter + 1 })
        }, 1000)

      }
      /** 
      kasvataYhdella() {
        this.setState({ counter: this.state.counter + 1 })
      }
    
      nollaa() {
        this.setState({ counter: 0 })
      }*/
      //ES8 tapa

      kasvataYhdella = () => {
        this.setState({ counter: this.state.counter + 1 })
      }
    
      nollaa = () => {
        this.setState({ counter: 0 })
      }

      asetaArvoon = (arvo) => {
        return () => {
          this.setState({ counter: arvo })
        }
      }
    
      render() {
        console.log('renderöidään', this.state.counter)
        //Inf loop
        //this.setState({counter: 55})


        function handleClick() {
          console.log('Button was pressed.');
          //Does not work
          this.setState({ counter: this.state.counter + 1 })
        }

        return (
          <div>
        <Display counter={this.state.counter}/>
        <div>
        <Button
          handleClick={this.asetaArvoon(this.state.counter + 1)}
          text="Plus"
        />
        <Button
          handleClick={this.asetaArvoon(this.state.counter - 1)}
          text="Minus"
        />
        <Button
          handleClick={this.asetaArvoon(0)}
          text="Zero"
        />
        </div>
        </div>
        )
      }
    }

    //Toinen esimerkki


    class AppTwo extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          vasen: 0,
          oikea: 0,
          kaikki: []
        }
      }
    
      klikVasen = () => {
        this.setState({
          vasen: this.state.vasen + 1,
          kaikki: this.state.kaikki.concat('v')
        })
      }
    
      klikOikea = () => {
        this.setState({
          oikea: this.state.oikea + 1,
          kaikki: this.state.kaikki.concat('o')
        })
      }
    
      render() {

        const historia = () => {
          if (this.state.kaikki.length === 0) {
            return (
              <div>
                <em>sovellusta käytetään nappeja painelemalla</em>
              </div>
            )
          }
          return (
            <div>
              näppäilyhistoria: {this.state.kaikki.join(' ')}
            </div>
          )
        }
        return (
          <div>
            <div>
              {this.state.vasen}
              <button onClick={this.klikVasen}>vasen</button>
              <button onClick={this.klikOikea}>oikea</button>
              {this.state.oikea}
              <div>{historia()}</div>
            </div>
          </div>
        )
      }
    }

    
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )





//registerServiceWorker();
