import "./contentBox.css"
import TextInput from "../TextInput/TextInput"

function ContentBox({ items, setItems, placeholder, wrapperId }) {
  return (
    <div id={wrapperId} className="content-unit">
      <div className="content-box">
        <ul>
          {items.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
      <TextInput setItems={setItems} items={items} placeholder={placeholder} />
    </div>
  )
}

export default ContentBox
