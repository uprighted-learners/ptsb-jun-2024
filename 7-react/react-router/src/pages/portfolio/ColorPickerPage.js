import ColorPicker from "../../components/color/ColorPicker"
import { useState } from "react"

function ColorPickerPage() {
  const [color, setColor] = useState("red")

  const colors = ["red", "blue", "green", "yellow", "purple", "orange"]

  return (
    <div className="ColorPickerPage">
      <div id="color-display" style={{ backgroundColor: color }}></div>
      <ColorPicker colors={colors} handleColorChange={setColor} />
      <ColorPicker
        colors={["gray", "black", "white", "brown", "hotpink"]}
        handleColorChange={setColor}
      />
      <ColorPicker
        colors={["lavender", "lightpink", "lightblue"]}
        handleColorChange={setColor}
      />
    </div>
  )
}

export default ColorPickerPage
