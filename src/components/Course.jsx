const Course = ({course}) => {
    return (
      <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }
  const Header = ({course}) => {
    return <h1>{course.name}</h1>
  }
  const Content = ({parts}) => {
    return (
      <section>
        {parts.map(part => (
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
        ))}
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
  
  
  const Total = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <section>
        <h4>Total of {totalExercises} exercises</h4>
      </section>
    )
  }
export default Course