function TypeSelect({ types, onTypeChange, currentType }) {
  return (
    <select id="type-select" onChange={(e) => onTypeChange(e.target.value)}>
      {types.map((t) => (
        // the "selected" attribute will be what we see in the select
        // assigning it a boolean expression means it will be true if the types match
        <option value={t.name} key={t.name} selected={t.name === currentType}>
          {t.name}
        </option>
      ))}
    </select>
  )
}

export default TypeSelect
