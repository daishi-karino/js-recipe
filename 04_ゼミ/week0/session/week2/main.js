const addButton = document.getElementById("add-button")
const memoInput = document.getElementById("memo-input")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const inputValue = memoInput.value
  console.log(inputValue)

  const div = document.createElement("div")
  div.textContent = inputValue
  memoContainer.append(div)

  memoInput.value = ""
}
