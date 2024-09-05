import "./App.css"
import Nav from "./components/Nav/Nav"
import LearnerList from "./components/LearnerList/LearnerList"

function App() {
  const students = [
    "Adeyemi",
    "Rey",
    "Unique",
    "Tanner",
    "Lucy",
    "Samuel",
    "Aaron",
    "Ricardo",
    "John",
    "Paulo",
  ]
  const cohortName = "PTSB June 2024"
  const headerTabs = ["Intro", "Components", "State", "Props", "Hooks"]

  return (
    <div className="App">
      <main>
        <Nav tabs={headerTabs} randomThing="burrito" />
        <Nav />
        <LearnerList students={students} cohortName={cohortName} />
      </main>
      <Nav tabs={["About", "Contact", "Home", "Intro"]} />
    </div>
  )
}

export default App
