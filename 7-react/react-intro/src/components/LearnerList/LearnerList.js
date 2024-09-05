function LearnerList(props) {
  return (
    <>
      <h2>Learners in {props.cohortName} </h2>
      <ul>
        {props.students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </>
  )
}

export default LearnerList
