const addButton = document.getElementById("add-button")
const memoInput = document.getElementById("memo-input")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const inputValue = createDiv(memoInput.value)
  memoContainer.append(inputValue)

  memoInput.value = ""
}

const createDiv = function (text) {
  const div = document.createElement("div")
  div.textContent = text
  div.className = "div"

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"

  deleteButton.onclick = function () {
    div.remove()
  }
  div.append(deleteButton)

  return div
}

/*
addButton.onclick = function () {
  const inputValue = memoInput.value
  console.log(inputValue)

  const div = document.createElement("div")
  div.textContent = inputValue
  memoContainer.append(div)

  memoInput.value = ""

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    div.remove()
  }
  div.append(deleteButton)
}
*/
