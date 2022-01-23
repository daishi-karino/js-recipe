const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")
const button0 = document.getElementById("button0")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "ゴリゴリ",
      feedback: "残念でしたぁ！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  const samplebutton = document.createElement("button")

  samplebutton.textContent = quiz.choices[0].text
  button0.appendChild(samplebutton)

  /** 
  const amplebutton = document.createElement("button")

  amplebutton.textContent = quiz.choices[1].text
  button1.appendChild(amplebutton)

  const mplebutton = document.createElement("button")

  mplebutton.textContent = quiz.choices[2].text
  button2.appendChild(mplebutton)

  const plebutton = document.createElement("button")

  plebutton.textContent = quiz.choices[3].text
  button3.appendChild(plebutton)
  */
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}
button0.onclick = function () {
  choose(0)
}
button1.onclick = function () {
  choose(1)
}
button2.onclick = function () {
  choose(2)
}
button3.onclick = function () {
  choose(3)
}
choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function () {
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
