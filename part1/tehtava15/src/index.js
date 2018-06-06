import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
      <h1>{props.course}</h1>
    )}

const Osa = (props) => {
  return (
    <p>{props.part} {props.excersise}</p>
  )

    
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa part={props.part1} excersise={props.excersise1}/>
      <Osa part={props.part2} excersise={props.excersise2}/>
      <Osa part={props.part3} excersise={props.excersise3}/>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <p>yhteensä {props.sum_exercise} tehtävää</p>
  )

    
}


const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>

      <Otsikko course={kurssi}/>
      <Sisalto part1={osa1} excersise1={tehtavia1} 
      part2={osa2} excersise2={tehtavia2}
      part3={osa3} excersise3={tehtavia3}/>
      <Yhteensa sum_exercise={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

