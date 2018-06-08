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
    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          counter: 1
        }
        this.kasvataYhdella = this.kasvataYhdella.bind(this)
    this.nollaa = this.nollaa.bind(this)

        setInterval(() => {
          this.setState({ counter: this.state.counter + 1 })
        }, 1000)

      }
      kasvataYhdella() {
        this.setState({ counter: this.state.counter + 1 })
      }
    
      nollaa() {
        this.setState({ counter: 0 })
      }
    
      render() {
        console.log('renderöidään', this.state.counter)

        function handleClick() {
          console.log('Button was pressed.');
          //Does not work
          this.setState({ counter: this.state.counter + 1 })
        }

        return (
          <div>{this.state.counter}
            <button onClick={this.kasvataYhdella}>
              plus
            </button>
            <button onClick={this.nollaa}>
            zero
            </button>
          </div>
        )
      }
    }
    
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )




//registerServiceWorker();
