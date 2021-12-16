// TODO: remove
// document.querySelector("#tt-pageContent").remove();

// const stylesz = document.createElement("style");
// stylesz.innerHTML = `
// .hidden { display: none; } /* Modal Styles - Global */ .question-modal-overlay { position: fixed; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.25); } .question-modal { max-width: 90%; background-color: #fff; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); overflow-x: hidden; } .question-modal__background { height: 100%; position: absolute; top: -48px; left: 0; } .question-modal__close { font-size: 34px; background-color: transparent; border: none; outline: none; transform: rotate(45deg); position: absolute; top: 24px; right: 24px; } .question-modal__heading { font: 700 35px/45px "Jost", sans-serif !important; text-transform: uppercase; padding-bottom: 0 !important; margin-bottom: 24px; color: #000; } .question-modal__text { font: 400 16px/27px "Open Sans", sans-serif; color: #000; margin: 24px 0; } .question-modal__button { display: flex !important; justify-content: center; align-items: center; max-width: 100%; height: 50px; font: 500 14px "Jost", sans-serif; color: #fff !important; text-align: center; text-transform: uppercase; background-color: #de3427; margin-top: 40px; } @media only screen and (max-width: 768px) { .question-modal__heading { line-height: normal !important; } } @media only screen and (max-width: 576px) { .question-modal { padding-left: 24px !important; padding-right: 24px !important; } .question-modal__heading { font-size: 24px !important; } .question-modal__text { font-size: 14px; } .question-modal__button { width: 250px; margin-left: auto; margin-right: auto; } } /* Modal Start */ .question-modal.modal-start { width: 679px; min-height: 420px; padding: 78px 56px 84px 256px; } .question-modal.modal-start .question-modal__background { top: 0; } @media only screen and (max-width: 768px) { .question-modal.modal-start { min-height: unset; text-align: center; padding: 56px; } .question-modal.modal-start .question-modal__background { display: none; } } /* Modal Question */ .question-modal.modal-question { width: 466px; min-height: 559px; padding: 48px 25px 125px 40px; } .question-modal.modal-question .background-question { height: 106px; top: unset; bottom: 0; } .question-modal.modal-question .question-modal-progress { display: flex; align-items: center; list-style: none; } .question-modal.modal-question .question-modal-progress strong { font: 600 16px "Jost", sans-serif; color: #000; } .question-modal.modal-question .question-modal-bars { display: flex; padding-left: 0; margin-bottom: 0; margin-left: 16px; list-style: none; } .question-modal.modal-question .question-modal-bars .modal-bars__item { width: 40px; height: 8px; background-color: #ddd; } .question-modal.modal-question .question-modal-progress .modal-bars__item.active { background-color: #de3427; } .question-modal.modal-question .question-modal-progress .modal-bars__item:not(:last-of-type) { margin-right: 4px; } .question-modal.modal-question .question-modal-answers { display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; } .question-modal.modal-question .question-modal-answers .modal-answers__item { display: flex; align-items: center; padding-left: 34px; position: relative; } .question-modal.modal-question .question-modal-answers .modal-answers__item:not(:last-of-type) { margin-bottom: 24px; } .question-modal.modal-question .question-modal-answers .modal-answers__item input { appearance: none; width: 16px; height: 16px; border-radius: 50%; border: 1px solid #ddd; margin-right: 16px; position: absolute; left: 0; top: 50%; transform: translateY(-50%); } .question-modal.modal-question .question-modal-answers .modal-answers__item input:checked { background-color: #de3427; } .question-modal.modal-question .question-modal-answers .modal-answers__item label { font: 600 16px "Jost", sans-serif; color: #000; } .question-modal.modal-question.answer-selected .question-modal-answers .modal-answers__item label { color: #ddd; } .question-modal.modal-question.answer-selected .question-modal-answers .modal-answers__item input:checked + label { color: #000; } .question-modal.modal-question .question-modal__button { width: 240px; } .question-modal.modal-question .question-modal__button { background-color: #ddd; } .question-modal.modal-question.answer-selected .question-modal__button { background-color: #de3427; } /* Modal Results */ .question-modal.modal-results { padding: 56px 64px 56px 248px; width: 712px; min-height: 423px; overflow-x: visible; } .question-modal.modal-results .question-modal__background { left: 21px; } .question-modal.modal-results .question-modal__score { display: flex; align-items: center; flex-wrap: wrap; } .question-modal.modal-results .question-modal__score span { font: 400 16px "Jost", sans-serif; color: #000; } .question-modal.modal-results .question-modal__score .score-list { display: flex; padding-left: 0; margin: 0 8px; list-style: none; } .question-modal.modal-results .question-modal__score .score-list__item { width: 11px; height: 22px; background-image: url(https://i.imgur.com/Ieane3M.png); } .question-modal.modal-results .question-modal__score .score-list__item:not(:last-of-type) { margin-right: 5.5px; } .question-modal.modal-results .question-modal__score strong { font: 600 16px "Jost", sans-serif; color: #000; } .question-modal.modal-results .question-modal__heading { margin: 40px 0 16px; } .question-modal.modal-results .question-modal__text { margin: 0; } @media only screen and (max-width: 768px) { .question-modal.modal-results { min-height: unset; padding: 56px; } .question-modal.modal-results .question-modal__background { display: none; } } @media only screen and (max-width: 576px) { .question-modal.modal-results .question-modal__heading { margin-top: 16px; } }
// `;
// document.head.append(stylesz);

// Constants
const QUESTIONS = [
  {
    id: 0,
    text: "You’re visiting a new city and you’ve been trusted with the ultimate responsibility: you get to choose which restaurant you and your friends will visit.",
    question: "Daunting, yes, but which will you choose?",
    answers: [
      { text: "A Top-Rated Ramen Shop", score: 1 },
      { text: "Texas-Style BBQ", score: 2 },
      { text: "A multicultural fusion restaurant", score: 3 },
    ],
  },
  {
    id: 1,
    text: "You’re seated with your travel buddies at the restaurant you chose. Everyone thinks it was a great choice (go, you!).",
    question: "It’s time to order drinks...what are you sipping?",
    answers: [
      { text: "Your Favorite Soft Drink", score: 1 },
      { text: "One of the restaurant's fancy signature cocktails", score: 2 },
      { text: "A shot of tequila (or two...)", score: 3 },
    ],
  },
  {
    id: 2,
    text: "It’s the end of the meal and, against all odds, you have room for dessert.",
    question: "Which sweet treat are you sticking around for?",
    answers: [
      {
        text: "Anything Flambé...if it's not on fire, you don't want it",
        score: 1,
      },
      {
        text: "Apple Pie and Ice Cream...can't go wrong with a classic",
        score: 2,
      },
      {
        text: "Molten Chocolate Lava Cake...the more lava, the better!",
        score: 3,
      },
    ],
  },
];
const RESULTS = [
  {
    id: 0,
    heading: "Ghost Pepper & Blueberry",
    imgUrl: "https://i.imgur.com/GR2jttY.png",
    description:
      "You’re curious about heat, but not quite ready to take a dip into a volcano. You appreciate classic flavors, but you’re willing to look outside your comfort zone if it sounds appealing enough.",
    btnUrl:
      "https://bravadospice.com/products/ghost-pepper-blueberry-hot-sauce",
  },
  {
    id: 1,
    heading: "Aka Miso Ghost Reaper",
    imgUrl: "https://i.imgur.com/1KR2wKt.png",
    description:
      "You appreciate all things out-of-the-ordinary and love seeing a dish you’ve never heard of before on the menu. You’re ready for some serious flavor and heat.",
    btnUrl:
      "https://bravadospice.com/collections/our-products/products/aka-miso-ghost-reaper-hot-sauce",
  },
  {
    id: 2,
    heading: "Black Garlic Carolina Reaper",
    imgUrl: "https://i.imgur.com/aP5r5dN.png",
    description:
      "We definitely wouldn’t mess with you. In fact, we’re pretty sure we saw your picture on a restaurant wall for completing some insane hot wing challenge.",
    btnUrl:
      "https://bravadospice.com/collections/our-products/products/black-garlic-carolina-reaper-hot-sauce",
  },
];

const mapUserScoreToResult = (userScore) => {
  let resultId = 0;
  if (userScore >= 4) resultId = 1;
  if (userScore >= 7) resultId = 2;

  const result = RESULTS[resultId];

  const answersTotal = QUESTIONS[0].answers.length;
  const scoreRangeMax = (resultId + 1) * answersTotal;
  const scoreRangeMin = scoreRangeMax - answersTotal + 1;

  return result ? { result, scoreRangeMin, scoreRangeMax } : null;
};

// Templates
const processInitTemplate = () =>
  `<button class="question-modal__close">+</button> <img src="https://i.imgur.com/zar5BMD.png" alt="Modal Background" class="question-modal__background background-start" /> <h3 class="question-modal__heading">How Hot Are YOU?</h3> <span class="question-modal__text" >Can’t decide which Bravado Spice hot sauce to try first? Just answer a few quick questions and we’ll discover which flavors your palate is craving.</span > <a href="#" class="question-modal__button button-start">Begin Quiz</a>`;

const processQuestionTemplate = ({ id, text, question, answers }) => {
  // Map params to template params
  const questionNumber = id + 1;
  const questionsTotal = QUESTIONS.length;
  const answersListHtml = answers
    .map(
      ({ text: answerText, score }, ind) =>
        `
          <li class="modal-answers__item">
            <input type="radio" id="${ind}" name="${questionNumber}" value="${score}" />
            <label for="${ind}">${answerText}</label>
          </li>
        `
    )
    .join("");

  const questionTemplate = `
    <button class="question-modal__close">+</button>
    <img src="https://i.imgur.com/WpwYgO4.png" alt="Modal Background" class="question-modal__background background-question" />
    <div class="question-modal-progress">
      <strong>${questionNumber} of ${questionsTotal}</strong>
      <ul class="question-modal-bars">
        <li class="modal-bars__item ${
          questionNumber >= 1 ? "active" : ""
        }"></li>
        <li class="modal-bars__item ${
          questionNumber >= 2 ? "active" : ""
        }"></li>
        <li class="modal-bars__item ${
          questionNumber >= 3 ? "active" : ""
        }"></li>
      </ul>
    </div>
    <p class="question-modal__text">${text} ${question}</p>
    <ul class="question-modal-answers">
      ${answersListHtml}
    </ul>
    <a href="#" class="question-modal__button button-submit">${
      // questionNumber !== questionsTotal ? "Next" : "Discover Your Sauce"
      "Next"
    }</a>
  `;

  // add id to every modal question
  document
    .querySelector(".question-modal")
    .setAttribute("id", `modalQuestion_${questionNumber}`);

  return questionTemplate;
};

const processResultsTemplate = ({
  result: { id, heading, imgUrl, description, btnUrl },
  scoreRangeMin,
  scoreRangeMax,
}) => {
  const listItemsTotal = id + 1;

  let scoreListHtml = "";
  new Array(listItemsTotal)
    .fill()
    .forEach(() => (scoreListHtml += '<li class="score-list__item"></li>'));

  const resultsTemplate = `
    <img src="${imgUrl}" alt="Modal Background" class="question-modal__background background-results" />
    <div class="question-modal__score">
      <span>Your Result:</span>
      <ul class="score-list">
        ${scoreListHtml}
      </ul>
      <strong>${scoreRangeMin} to ${scoreRangeMax} POINTS</strong>
    </div>
    <h3 class="question-modal__heading">${heading}</h3>
    <p class="question-modal__text">${description}</p>
    <a href="${btnUrl}" class="question-modal__button button-results">Shop ${heading}</a>
  `;

  document
    .querySelector(".question-modal")
    .setAttribute("id", `modalQuestion_result`);

  return resultsTemplate;
};

const hideQuestionModal = () => {
  const questionModal = document.querySelector(".question-modal-overlay");
  questionModal?.classList.add("hidden");

  document
    .querySelectorAll("body > *:not(.question-modal-overlay)")
    .forEach((item) => (item.style.filter = "none"));

  // Unlock Scroll
  document.body.style.overflowY = "visible";
  document.body.style.touchAction = "unset";
};
const showQuestionModal = () => {
  const questionModal = document.querySelector(".question-modal-overlay");
  questionModal?.classList.remove("hidden");

  // Blur all Nodes except Modal
  document
    .querySelectorAll("body > *:not(.question-modal-overlay)")
    .forEach((item) => (item.style.filter = "blur(3px)"));

  // Lock Scroll
  document.body.style.overflowY = "hidden";
  document.body.style.touchAction = "none";
};

const renderQuestionModalTemplate = (template) => {
  const questionModal = document.querySelector(".question-modal");
  questionModal.innerHTML = template;
};

// Disable inputs & Enable submit button
const addAnswerSelected = () => {
  const questionModal = document.querySelector(".question-modal");
  questionModal.classList.add("answer-selected");
};
// Enable inputs & Disable submit button
const removeAnswerSelected = () => {
  const questionModal = document.querySelector(".question-modal");
  questionModal.classList.remove("answer-selected");
};

const initQuestionModal = () => {
  // Create Question Modal Overlay
  const questionModalOverlay = document.createElement("div");
  questionModalOverlay.classList.add("question-modal-overlay");

  // Create Question Modal
  const questionModal = document.createElement("div");
  questionModal.classList.add("question-modal", "modal-start");

  // add id to the start question modal
  questionModal.setAttribute("id", "modalQuestion_start");

  // Append Question Modal Overlay
  questionModalOverlay.append(questionModal);
  document.body.append(questionModalOverlay);

  showQuestionModal();

  // Process and Render Init Template
  const initTemplate = processInitTemplate();
  renderQuestionModalTemplate(initTemplate);

  // Init Button Start
  const btnStart = questionModal.querySelector(".button-start");
  btnStart.addEventListener("click", renderQuestion.bind(null, QUESTIONS[0]));

  // Init Button Close
  const btnClose = document.querySelector(".question-modal__close");
  btnClose.addEventListener("click", hideQuestionModal);
};

const renderQuestion = (question) => {
  const questionModal = document.querySelector(".question-modal");
  const questionHtml = processQuestionTemplate(question);

  renderQuestionModalTemplate(questionHtml);
  questionModal.classList.remove("modal-start");
  questionModal.classList.add("modal-question");

  removeAnswerSelected();

  // Toggle "answer-selected" class on Answer Selection
  const answerInputs = questionModal.querySelectorAll('input[type="radio"]');
  let answerId = -1;
  answerInputs.forEach((input, ind) =>
    input.addEventListener("change", () => {
      if (input.checked) answerId = ind;

      addAnswerSelected();
    })
  );

  // Init Answer Submit Button
  const btnSubmit = questionModal.querySelector(".button-submit");
  const { id: currentQuestionId } = question;
  btnSubmit.addEventListener("click", () => {
    if (!questionModal.classList.contains("answer-selected")) return;
    answerId !== -1 && submitAnswer(question.id, answerId);
    if (QUESTIONS.some((q) => q.id === currentQuestionId + 1)) {
      renderQuestion(QUESTIONS[currentQuestionId + 1]);
    } else {
      showResults();
      questionModal.classList.remove("modal-question");
      questionModal.classList.add("modal-results");
    }
  });

  // Init Button Close
  const btnClose = document.querySelector(".question-modal__close");
  btnClose.addEventListener("click", hideQuestionModal);
};

const submitAnswer = (questionId, answerId) => {
  const questionAnswers = QUESTIONS[questionId].answers;
  const scoreDelta = questionAnswers[answerId]?.score;

  if (scoreDelta > 0) window.userScore += scoreDelta;
};

const showResults = () => {
  const result = mapUserScoreToResult(window.userScore);
  if (!result) {
    console.error("Quiz Result not found");
    return;
  }
  const resultsTemplate = processResultsTemplate(result);
  renderQuestionModalTemplate(resultsTemplate);
};

// TODO: Add Timeout
// Init Form after Page Loaded
setTimeout(() => {
  window.userScore = 0;

  initQuestionModal();
}, 3000);

window.previewOn = showQuestionModal;
window.previewOff = hideQuestionModal;
