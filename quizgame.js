
const quizQuestions = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is JavaScript mainly used for?", answer: "web development" },
  { question: "Which bird is the state bird of Himachal Pradesh?", answer: "koklass pheasant" },
  { question: "What is the full form of HTML?", answer: "hypertext markup language" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i].question;
    const correct = quizQuestions[i].answer;

    let userAnswer = prompt(`${i + 1}. ${q}`);

    if (userAnswer !== null) {
      userAnswer = userAnswer.toLowerCase().trim();
    } else {
      userAnswer = "";
    }

    if (userAnswer === correct.toLowerCase().trim()) {
      score++;
      alert("Correct!");
    } else {
      alert(`Wrong! Correct answer: ${correct}`);
    }
  }

  alert(`Quiz complete! Your score: ${score} / ${quizQuestions.length}`);
}

runQuiz();  // Call this in your console
