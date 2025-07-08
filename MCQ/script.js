let score = 0;
let answeredQuestions = new Set();

function answer(isCorrect, questionElement) {
    // Prevent double answering
    const questionId = questionElement.dataset.questionId;
    if (answeredQuestions.has(questionId)) return;

    // Get output element
    const output = questionElement.querySelector(".output");

    // Show answer result
    if (isCorrect) {
        output.textContent = "✅ Correct!";
        output.style.color = "green";
        score++;
    } else {
        output.textContent = "❌ Wrong!";
        output.style.color = "red";
    }

    // Disable buttons
    const buttons = questionElement.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    answeredQuestions.add(questionId);

    // Optionally: Show score when all are answered
    if (answeredQuestions.size === document.querySelectorAll(".card").length) {
        setTimeout(() => {
            alert(`You scored ${score}/${answeredQuestions.size}`);
        }, 300);
    }
}
