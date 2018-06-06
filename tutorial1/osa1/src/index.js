import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name} you are {props.age} years old</p>
        </div>
    )
}

const Footer = () => {
    return (
      <div>greeting app created by <a href="https://github.com/mluukkai">mluukkai</a></div>
    )
  }

const App = () => {

    /**const now = new Date()
    const a = 10
    const b = 20
    return (
      <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>{a} plus {b} is {a+b}</p>
      </div>**/
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

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
