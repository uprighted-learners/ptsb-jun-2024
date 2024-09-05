import "./nav.css"

function Nav(props) {
  console.log(props)
  let burritoString = ""
  if (props.randomThing) {
    burritoString = props.randomThing
  }

  const tabs = props.tabs || []

  return (
    <nav>
      {tabs.map((tab) => (
        <a href="/" className="header-tab" key={`header-${tab}`}>
          {tab}
        </a>
      ))}
      <span className="header-tab">{burritoString}</span>
    </nav>
  )
}

export default Nav
