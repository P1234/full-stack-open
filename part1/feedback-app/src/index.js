import React, {useState } from 'react'
import ReactDOM from 'react-dom'

export const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

export const Statistic = ({text, value}) => {
  return (
    <tr>
    <td>{text}
    </td>
    <td>{value}</td>
    </tr>
  )
}


export const Statistics = (props) => {
  const {good, neutral, bad} = props.props

if (good || bad || neutral) {
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good}></Statistic>
          <Statistic text="neutral" value={neutral}></Statistic>
          <Statistic text="bad" value={bad}></Statistic>
          <Statistic text="All" value={(good + neutral + bad)}></Statistic>
          <Statistic text="Average" value={(good - bad) / (good + neutral + bad)}></Statistic>
          <Statistic text="Positive" value={`${(good / (good + neutral + bad))*100} %`}></Statistic>
        </tbody>
      </table>
    </div>
    )
}

return (
  <div>No feedback given</div>
)
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

return (
<div>
  <h1>Give feedback</h1>
  <Button handleClick = {() => setGood(good + 1)} text = "Good"></Button>
  <Button handleClick = {() => setNeutral(neutral + 1)} text = "Neutral"></Button>
  <Button handleClick = {() => setBad(bad + 1)} text = "Bad"></Button>
  <h1>statistics</h1>
  <Statistics props = {{good, neutral, bad}}></Statistics>



</div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)