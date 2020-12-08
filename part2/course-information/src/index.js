import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course})  => (
    <div>
      <h1>{course}</h1>
    </div>
  )

const Part = (props) => (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )


const Content = (props) => (
    <div>
      {props.parts.map((part, i) => <Part key = {i} part = {part}></Part>)}
    </div>
  )

const Total = (props) => (
    <div>
      <p>Number of exercises {props.parts.reduce((acc, cur) => acc + cur.exercises, 0) }</p>
    </div>
  )

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))