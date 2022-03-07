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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
      part1={part1.name} exercises1={part1.exercises}
      part2={part2.name} exercises2={part2.exercises}
      part3={part3.name} exercises3={part3.exercises}
      />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises}/>
      
    </div>
  );
}

export default App;
