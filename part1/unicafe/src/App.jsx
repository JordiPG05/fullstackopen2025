import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.name}
    </button>
  )
}
const StatisticsLine = (props) => {
  if (props.text === "Percentage") {
    return (
      <p> {props.text}: {props.number} %</p>)
  }
  else {
    return (
      <p> {props.text}: {props.number}</p>)
  }
}

const Statistics = ({good,neutral,bad}) => {
  const total = good+neutral+bad
  const average = (good - bad) / total
  const Percentage = (good/total) * 100
  if (total === 0) {
    return (
    <div>
      No feedback given
    </div>
    )
  }
  return (
    <div>
      <StatisticsLine number = {good} text="Good"></StatisticsLine>
      <StatisticsLine number = {neutral} text="Neutral"></StatisticsLine>
      <StatisticsLine number = {bad} text="Bad"></StatisticsLine>
      <StatisticsLine number = {average} text="Average"></StatisticsLine>
      <StatisticsLine number = {Percentage} text="Percentage"></StatisticsLine>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (good) => setGood(good)
  const setToNeutral = (neutral) => setNeutral(neutral)
  const setToBad = (bad) => setBad(bad)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button name="good" handleClick={ () => setToGood(good+1)}></Button>
      <Button name="neutral" handleClick={ () => setToNeutral(neutral+1)}></Button>
      <Button name="bad" handleClick={ () => setToBad(bad+1)}></Button>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

    </div>

  )
}

export default App