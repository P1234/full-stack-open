import React from 'react'

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


const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part key = {part.id} part = {part}></Part>)}
    </div>
  )
}

const Total = (props) => (
    <div>
      <p><b> Total number of exercises {props.parts.reduce((acc, cur) => acc + cur.exercises, 0) }</b></p>
    </div>
  )



const Course = (props) => {
  return (
    <div>
      {props.courses.map(course => {
        return(
          <div key = {course.id}>
            <Header course = {course.name}/>
            <Content parts = {course.parts}/>
            <Total parts = {course.parts}/>
          </div>
        )
      }
      )
      }
    </div>
  )
}
export default Course