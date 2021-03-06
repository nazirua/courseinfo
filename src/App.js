import React from 'react';

const Header = ({course}) => <h1>{course}</h1>

const Part1 = ({part1, exercises1}) => <p> {part1} {exercises1} </p>
const Part2 = ({part2, exercises2}) => <p> {part2} {exercises2} </p>
const Part3 = ({part3, exercises3}) => <p> {part3} {exercises3} </p>


const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return (
    <>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises2={exercises2} />
      <Part3 part3={part3} exercises3={exercises3} />
     
    </>
  )
  }

  const Total = ({exercises}) => {
    return <p>Number of exercises {exercises}</p>
    
    }

function App() {
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
      <Header course={course.name} />
      <Content 
      part1={course.parts[0].name} exercises1={course.parts[0].exercises}
      part2={course.parts[1].name} exercises2={course.parts[1].exercises}
      part3={course.parts[2].name} exercises3={course.parts[2].exercises}
      />
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      
    </div>
  );
}

export default App;
