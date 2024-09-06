import "./App.css"
import ColorPicker from "./components/ColorPicker/ColorPicker"
import { useState } from "react"

function App() {
  const [color, setColor] = useState("red")

  const colors = ["red", "blue", "green", "yellow", "purple", "orange"]

  return (
    <div className="App">
      <div id="color-display" style={{ backgroundColor: color }}></div>
      <ColorPicker colors={colors} handleColorChange={setColor} />
      <ColorPicker
        colors={["gray", "black", "white", "brown", "hotpink"]}
        handleColorChange={setColor}
      />
    </div>
  )
}

export default App
