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
  const osa1  = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>

      <Otsikko course={kurssi}/>
      <Sisalto part1={osa1.nimi} excersise1={osa1.tehtavia} 
      part2={osa2.nimi} excersise2={osa2.tehtavia}
      part3={osa3.nimi} excersise3={osa3.tehtavia}/>
      <Yhteensa sum_exercise={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))

