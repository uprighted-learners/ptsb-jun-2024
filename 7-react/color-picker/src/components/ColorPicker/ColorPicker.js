import "./colorPicker.css"

function ColorPicker({ colors, handleColorChange }) {
  return (
    <div id="bubble-wrapper">
      {colors.map((color) => (
        <div
          className="bubble"
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        ></div>
      ))}
    </div>
  )
}

export default ColorPicker
