// document.cookie = "firstName=Danny; SameSite=None; Secure"

if (document.cookie.includes("color=")) {
  const cookieVal = document.cookie
    .split(";")
    .find((s) => s.includes("color="))
    .split("=")
    .at(1)
  document.body.style.backgroundColor = decodeURIComponent(cookieVal)
}

// select button
const btn = document.getElementById("pick-color")
// select color input element
const picker = document.querySelector("input[type=color]")

btn.addEventListener("click", (evt) => {
  const color = picker.value
  document.body.style.backgroundColor = color
  fetch(`/color?bgColor=${encodeURIComponent(color)}`)
})
