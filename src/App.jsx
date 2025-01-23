const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}
const Part = ({name, exercises}) => {
  return(
    <section>
      <p>{name}{exercises}</p>
    </section>
  )
}

const Content = ({parts}) => {
  return (
    <section>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </section>
  )
}
const Total = ({parts}) => {
  return (
    <section>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </section>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React ",
        exercises: 1
      },
      {
        name: "Using props to pass data ",
        exercises: 7
      },
      {
        name: "State of a component ",
        exercises: 14
      },
    ]
  }

  return (
    <section>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </section>
  )
}
export default App