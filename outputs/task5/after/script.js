const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");
const quizSummary = document.querySelector("#quiz-summary");
const quizExplanations = document.querySelector("#quiz-explanations");
const questions = [...quizForm.querySelectorAll(".quiz-question")];

const explanations = [
    "Corals are animals. Reef-building corals are made up of many small polyps living in colonies.",
    "Reefs provide habitat and shelter for many kinds of marine life.",
    "Environmental stress, including unusually warm water, can cause coral bleaching.",
    "Observing without touching helps avoid harming delicate coral and marine life.",
    "Reducing litter and joining safe community cleanups can help keep waste out of waterways."
];

quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const unanswered = questions.find((question) => !question.querySelector("input:checked"));
    if (unanswered) {
        quizResult.hidden = false;
        quizSummary.textContent = "Choose one answer for each question before checking your score.";
        quizExplanations.innerHTML = "";
        unanswered.querySelector("input").focus();
        return;
    }

    const score = questions.reduce((total, question) => {
        const answer = question.querySelector("input:checked");
        return total + Number(answer.value === question.dataset.answer);
    }, 0);

    const feedback = score === questions.length
        ? "Excellent reef knowledge. Keep learning and sharing what you know."
        : score >= 3
            ? "Good work. Review the notes below, then try the quiz again if you like."
            : "A good start. Read the learning cards above and build your reef knowledge one idea at a time.";

    quizSummary.innerHTML = `<strong>Your score: ${score} of ${questions.length}.</strong> ${feedback}`;
    quizExplanations.innerHTML = explanations.map((explanation) => `<li>${explanation}</li>`).join("");
    quizResult.hidden = false;
});

quizForm.addEventListener("reset", () => {
    quizResult.hidden = true;
    quizSummary.textContent = "";
    quizExplanations.innerHTML = "";
});

const checklistInputs = [...document.querySelectorAll('.checklist input[type="checkbox"]')];
const checklistProgress = document.querySelector("#checklist-progress");
const checklistCount = document.querySelector("#checklist-count");

function updateChecklistProgress() {
    const completed = checklistInputs.filter((input) => input.checked).length;
    const total = checklistInputs.length;
    const label = `${completed} of ${total} actions complete`;
    checklistProgress.value = completed;
    checklistProgress.textContent = label;
    checklistCount.value = label;
    checklistCount.textContent = label;
}

checklistInputs.forEach((input) => input.addEventListener("change", updateChecklistProgress));