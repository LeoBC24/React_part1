const Header = (props) => {
  return (
    <section>
      <p>{props.course}</p>
    </section>
  )
}
const Part = ({name, exercises}) => {
  return(
    <section>
      <p>{name}{exercises}</p>
    </section>
  )
}

const Content = ({part1, part2, part3}) => {
  return (
    <section>
      <Part name={part1.name} exercises={part1.exercises1}/>
      <Part name={part2.name} exercises={part2.exercises2}/>
      <Part name={part3.name} exercises={part3.exercises3}/>
    </section>
  )
}
const Total = (props) => {
  return (
    <section>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </section>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = {name: "Fundamentals of React", exercises:1};
  const part2 = {name: "Using props to pass data", exercises:7};
  const part3 = {name: "State of a component", exercises:14};

  return (
    <section>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </section>
  )
}
export default App