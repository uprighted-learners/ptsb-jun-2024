import "./textInput.css"

// we can destructure the props in the function declaration
// this is optional, but it's clean and looks nice :)
function TextInput({ items, setItems, placeholder }) {
  const handleEntry = (e) => {
    if (e.key === "Enter") {
      // use the spread operator to make a copy of arrays
      // we must ALWAYS copy props before we mutate them
      // props are READ-ONLY
      const newItems = [...items]
      newItems.push(e.target.value)
      // here we're calling the parent's setter
      // to update state that "belongs to" the parent
      setItems(newItems)
      e.target.value = ""
    }
  }

  return <input type="text" placeholder={placeholder} onKeyDown={handleEntry} />
}

export default TextInput
