const panels = document.querySelectorAll(".panel");
const navLinks = document.querySelectorAll(".nav-link");
const goButtons = document.querySelectorAll("[data-go]");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function showSection(id) {
  panels.forEach((panel) => panel.classList.toggle("visible", panel.id === id));
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.target === id));
  if (mainNav && mainNav.classList.contains("open")) {
    mainNav.classList.remove("open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  }
  window.location.hash = id;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => showSection(link.dataset.target));
});

goButtons.forEach((btn) => {
  btn.addEventListener("click", () => showSection(btn.dataset.go));
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 860 && mainNav && menuToggle) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const sectionFromHash = window.location.hash.replace("#", "");
if (sectionFromHash && document.getElementById(sectionFromHash)) {
  showSection(sectionFromHash);
}

const videoData = [
  {
    topic: "Imperialism and Colonialism",
    description: "Understand causes, methods of control, and effects on colonies."
  },
  {
    topic: "World War I",
    description: "Learn MAIN causes, trench warfare, and Treaty of Versailles impacts."
  },
  {
    topic: "World War II",
    description: "Explore totalitarianism, major battles, and post-war world order."
  },
  {
    topic: "Cold War",
    description: "Study proxy wars, nuclear tension, and the fall of the Soviet Union."
  }
];

const videoCards = document.getElementById("videoCards");
videoData.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card video-card";
  card.innerHTML = `
    <div class="video-placeholder">
      <div class="play">▶</div>
    </div>
    <p class="topic">${item.topic}</p>
    <span class="badge">Lesson Topic</span>
    <p>${item.description}</p>
  `;
  videoCards.appendChild(card);
});

const mcqQuizSets = [
  {
    id: "imp",
    title: "Imperyalismo at Kolonyalismo",
    questions: [
      {
        q: "1) Ano ang pinakamahalagang dahilan ng paghangad ng kolonya ng mga bansang Europeo?",
        options: [
          "Upang palaganapin ang wika",
          "Upang makakuha ng hilaw na materyales at bagong pamilihan",
          "Upang maiwasan ang digmaan",
          "Upang magpalawak ng turismo"
        ],
        answer: 1
      },
      {
        q: "2) Pangunahing pagkakaiba ng kolonyalismo at imperyalismo:",
        options: [
          "Pareho lang ang kahulugan",
          "Kolonyalismo ay direktang pamamahala; imperyalismo ay maaaring impluwensya",
          "Imperyalismo ay walang kontrol",
          "Kolonyalismo ay pansamantala"
        ],
        answer: 1
      },
      {
        q: "3) Epekto ng Treaty of Tordesillas noong 1494:",
        options: [
          "Pinag-isa ang Europe",
          "Hinati ang mundo sa Spain at Portugal",
          "Pinatigil ang eksplorasyon",
          "Pinabagsak ang imperyo sa Asya"
        ],
        answer: 1
      },
      {
        q: "4) Bakit mahalaga ang Dutch East India Company?",
        options: [
          "Ito ay simbahan",
          "Ito ay samahang pang-edukasyon",
          "Kumpanyang kumontrol sa kalakalan sa Asya",
          "Hukbo ng Netherlands"
        ],
        answer: 2
      },
      {
        q: "5) Ano ang ipinakita ng pagkatalo ng Russia sa Japan noong 1905?",
        options: [
          "Mahina ang Japan",
          "Walang impluwensya ang Europa",
          "Kayang talunin ng bansang Asyano ang kapangyarihang Europeo",
          "Natapos ang imperyalismo"
        ],
        answer: 2
      }
    ]
  },
  {
    id: "ww1",
    title: "Unang Digmaang Pandaigdig",
    questions: [
      {
        q: "1) Bakit lumawak sa pandaigdigang digmaan ang lokal na alitan?",
        options: ["Teknolohiya", "Alyansa ng mga bansa", "Relihiyon", "Kalakalan"],
        answer: 1
      },
      {
        q: "2) Epekto ng militarismo:",
        options: [
          "Nagpahina ng hukbo",
          "Nagpalakas ng ekonomiya",
          "Nagdulot ng takot at kompetisyon sa armas",
          "Nagpababa ng tensyon"
        ],
        answer: 2
      },
      {
        q: "3) Bakit mahalaga ang pagpaslang kay Archduke Franz Ferdinand?",
        options: [
          "Siya ang hari",
          "Direktang nagpasiklab ng digmaan",
          "Huling labanan",
          "Kasunduan ito"
        ],
        answer: 1
      },
      {
        q: "4) Pangunahing katangian ng trench warfare:",
        options: ["Mabilis na laban", "Labanan sa himpapawid", "Mabagal at patagalan", "Walang depensa"],
        answer: 2
      },
      {
        q: "5) Epekto ng Treaty of Versailles sa Germany:",
        options: ["Paglakas ng ekonomiya", "Pagkakaroon ng kolonya", "Mabigat na parusa at kahihiyan", "Pagkapanalo"],
        answer: 2
      }
    ]
  },
  {
    id: "ww2",
    title: "Ikalawang Digmaang Pandaigdig",
    questions: [
      {
        q: "1) Ano ang nagpalakas ng suporta kay Hitler?",
        options: [
          "Pag-unlad ng ekonomiya",
          "Pagkakaisa ng Allied Powers",
          "Kahirapan at kahihiyang dulot ng Treaty of Versailles",
          "Pagkatalo ng Japan"
        ],
        answer: 2
      },
      {
        q: "2) Paano nakaimpluwensya ang Great Depression?",
        options: [
          "Pinatatag ang demokrasya",
          "Pinalakas ang tradisyunal na lider",
          "Nagbukas ng daan sa awtoritaryanismo",
          "Naging neutral ang mga bansa"
        ],
        answer: 2
      },
      {
        q: "3) Bunga ng pagsalakay sa Poland noong 1939:",
        options: [
          "Pagbuo ng UN",
          "Pagdeklara ng digmaan ng UK at France",
          "Pagsuko ng Germany",
          "Pagpasok ng US"
        ],
        answer: 1
      },
      {
        q: "4) Kahalagahan ng D-Day:",
        options: [
          "Nagpatigil sa digmaan sa Asya",
          "Nagbukas ng bagong front laban sa Germany",
          "Nagpatibay sa Axis",
          "Nagpasuko sa Japan"
        ],
        answer: 1
      },
      {
        q: "5) Kritikal na bunga ng atomic bomb sa Japan:",
        options: [
          "Nagpalakas sa militar ng Japan",
          "Nagdulot ng agarang pagsuko",
          "Nagpahaba ng digmaan",
          "Nagpatibay sa Axis"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "cold",
    title: "Cold War",
    questions: [
      {
        q: "1) Bakit iniwasan ng US at USSR ang direktang digmaan?",
        options: [
          "Kakulangan sa sundalo",
          "Takot sa mutual destruction ng nuclear weapons",
          "Kawalan ng interes",
          "Pagkakaibigan ng lider"
        ],
        answer: 1
      },
      {
        q: "2) Domino Theory:",
        options: [
          "Pagbagsak ng ekonomiya",
          "Pagkalat ng komunismo mula sa isang bansa papunta sa iba",
          "Pagkakaisa ng mga bansa",
          "Pagwawakas ng digmaan"
        ],
        answer: 1
      },
      {
        q: "3) Epekto ng Berlin Blockade:",
        options: [
          "Nagkaroon ng pagkakaisa",
          "Lalong tumindi ang tensyon sa US at USSR",
          "Natapos ang Cold War",
          "Naging neutral ang Germany"
        ],
        answer: 1
      },
      {
        q: "4) Layunin ng propaganda sa Cold War:",
        options: [
          "Magturo ng agham",
          "Hikayatin ang suporta at sirain ang kalaban",
          "Magbigay ng trabaho",
          "Magpalago ng ekonomiya"
        ],
        answer: 1
      },
      {
        q: "5) Kahalagahan ng Cuban Missile Crisis:",
        options: [
          "Unang digmaan",
          "Pinakamalapit ang mundo sa nuclear war",
          "Huling laban",
          "Kasunduan ito"
        ],
        answer: 1
      }
    ]
  }
];

const identificationQuizSets = [
  {
    id: "imp-id",
    title: "Imperyalismo at Kolonyalismo",
    questions: [
      {
        q: "1) Ano ang tawag sa patakaran kung saan pinalalawak ng makapangyarihang bansa ang impluwensya sa ibang teritoryo?",
        answers: ["imperyalismo"]
      },
      {
        q: "2) Anong kasunduan noong 1494 ang naghati sa mundo sa pagitan ng Spain at Portugal?",
        answers: ["treaty of tordesillas", "kasunduan sa tordesillas"]
      },
      {
        q: "3) Ano ang pangunahing dahilan kung bakit naghahangad ng kolonya ang mga bansang Europeo?",
        answers: ["hilaw na materyales at pamilihan", "raw materials and markets", "hilaw na materyales"]
      }
    ]
  },
  {
    id: "ww1-id",
    title: "Unang Digmaang Pandaigdig",
    questions: [
      {
        q: "1) Sino ang pagkakapaslang noong 1914 na naging mitsa ng WWI?",
        answers: ["archduke franz ferdinand", "franz ferdinand"]
      },
      {
        q: "2) Ano ang tawag sa mabagal at patagalan na paraan ng labanan sa WWI?",
        answers: ["trench warfare", "pakikidigmang trintsera", "digmaang trintsera"]
      },
      {
        q: "3) Anong kasunduan ang naglagay ng mabigat na parusa sa Germany matapos ang WWI?",
        answers: ["treaty of versailles", "kasunduan sa versailles"]
      }
    ]
  },
  {
    id: "ww2-id",
    title: "Ikalawang Digmaang Pandaigdig",
    questions: [
      {
        q: "1) Aling bansa ang sinalakay ng Germany noong 1939 na nagpasimula ng WWII sa Europe?",
        answers: ["poland"]
      },
      {
        q: "2) Ano ang codename ng malawakang paglusob ng Allied Forces sa Normandy noong 1944?",
        answers: ["d-day", "operation overlord"]
      },
      {
        q: "3) Aling dalawang lungsod sa Japan ang binagsakan ng atomic bombs?",
        answers: ["hiroshima at nagasaki", "hiroshima and nagasaki", "hiroshima, nagasaki"]
      }
    ]
  },
  {
    id: "cold-id",
    title: "Cold War",
    questions: [
      {
        q: "1) Aling dalawang superpower ang pangunahing magkatunggali sa Cold War?",
        answers: ["us at ussr", "united states and ussr", "america at soviet union"]
      },
      {
        q: "2) Ano ang krisis noong 1962 na nagdala sa mundo sa bingit ng nuclear war?",
        answers: ["cuban missile crisis"]
      },
      {
        q: "3) Ano ang tawag sa teorya ng pagkalat ng komunismo mula isang bansa patungo sa iba?",
        answers: ["domino theory", "teoryang domino"]
      }
    ]
  }
];

const tfQuizSets = [
  {
    id: "imp-tf",
    title: "Imperyalismo at Kolonyalismo",
    questions: [
      { q: "1) Ang kolonyalismo ay direktang pananakop at pamamahala sa ibang lupain.", answer: true },
      { q: "2) Ang Treaty of Tordesillas ay kasunduan ng Germany at Russia.", answer: false },
      { q: "3) Isa sa dahilan ng imperyalismo ang paghahanap ng pamilihan at hilaw na materyales.", answer: true }
    ]
  },
  {
    id: "ww1-tf",
    title: "Unang Digmaang Pandaigdig",
    questions: [
      { q: "1) Ang assassination ni Archduke Franz Ferdinand ay may kaugnayan sa pagsiklab ng WWI.", answer: true },
      { q: "2) Naging mabilis at maikling digmaan ang trench warfare.", answer: false },
      { q: "3) Mabigat ang naging epekto ng Treaty of Versailles sa Germany.", answer: true }
    ]
  },
  {
    id: "ww2-tf",
    title: "Ikalawang Digmaang Pandaigdig",
    questions: [
      { q: "1) Nagsimula ang WWII sa Europe matapos salakayin ng Germany ang Poland.", answer: true },
      { q: "2) Ang D-Day ay naganap sa Pacific front laban sa Japan.", answer: false },
      { q: "3) Ang Hiroshima at Nagasaki bombings ay nag-ambag sa pagsuko ng Japan.", answer: true }
    ]
  },
  {
    id: "cold-tf",
    title: "Cold War",
    questions: [
      { q: "1) Direktang naglaban sa malaking digmaan ang US at USSR sa Cold War.", answer: false },
      { q: "2) Ang Cuban Missile Crisis ang isa sa pinakadelikadong yugto ng Cold War.", answer: true },
      { q: "3) Ang Domino Theory ay tungkol sa pagkalat ng komunismo sa magkakatabing bansa.", answer: true }
    ]
  }
];

const quizPages = document.querySelectorAll(".quiz-page");
const quizPageButtons = document.querySelectorAll("[data-quiz-page]");
const mcqTopicTabs = document.getElementById("mcqTopicTabs");
const mcqForm = document.getElementById("mcqForm");
const mcqResult = document.getElementById("mcqResult");
const submitMcq = document.getElementById("submitMcq");
const resetMcq = document.getElementById("resetMcq");
const startMcq = document.getElementById("startMcq");
const mcqStartWrap = document.getElementById("mcqStartWrap");
const idTopicTabs = document.getElementById("idTopicTabs");
const idForm = document.getElementById("idForm");
const idResult = document.getElementById("idResult");
const submitId = document.getElementById("submitId");
const resetId = document.getElementById("resetId");
const startId = document.getElementById("startId");
const idStartWrap = document.getElementById("idStartWrap");
const tfTopicTabs = document.getElementById("tfTopicTabs");
const tfForm = document.getElementById("tfForm");
const tfResult = document.getElementById("tfResult");
const submitTf = document.getElementById("submitTf");
const resetTf = document.getElementById("resetTf");
const startTf = document.getElementById("startTf");
const tfStartWrap = document.getElementById("tfStartWrap");

let activeMcq = mcqQuizSets[0];
let activeId = identificationQuizSets[0];
let activeTf = tfQuizSets[0];
const quizState = {
  mcq: { index: 0, score: 0, revealed: false, started: false },
  id: { index: 0, score: 0, revealed: false, started: false },
  tf: { index: 0, score: 0, revealed: false, started: false }
};

function setQuizVisibility(formEl, submitBtn, resetBtn, resultEl, startWrapEl, isOpen) {
  formEl.classList.toggle("quiz-locked", !isOpen);
  submitBtn.classList.toggle("quiz-locked", !isOpen);
  resetBtn.classList.toggle("quiz-locked", !isOpen);
  resultEl.classList.toggle("quiz-locked", !isOpen);
  startWrapEl.classList.toggle("quiz-locked", isOpen);
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function switchQuizPage(pageId) {
  quizPages.forEach((page) => page.classList.toggle("active", page.id === pageId));
  quizPageButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.quizPage === pageId));
}

quizPageButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchQuizPage(btn.dataset.quizPage));
});

function updateQuizProgress(formEl, quizSet, state, typeTag) {
  const total = quizSet.questions.length;
  const answered = Math.min(state.index + (state.revealed ? 1 : 0), total);
  const progressNode = formEl.querySelector(".quiz-progress");
  if (!progressNode) return;

  const pct = total ? Math.round((answered / total) * 100) : 0;
  const fill = progressNode.querySelector(".fill");
  const scoreNode = progressNode.querySelector(".score-value");
  const progress = progressNode.querySelector(".progress-value");

  const typeNode = progressNode.querySelector(".type-value");

  if (fill) fill.style.width = `${pct}%`;
  if (scoreNode) scoreNode.textContent = state.score;
  if (progress) progress.textContent = `${answered}/${total}`;
  if (typeNode) typeNode.textContent = typeTag;
}

function renderTopicTabs(targetEl, sets, activeSet, onChange) {
  targetEl.innerHTML = "";
  sets.forEach((set) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tab ${set.id === activeSet.id ? "active" : ""}`;
    btn.textContent = set.title;
    btn.addEventListener("click", () => onChange(set));
    targetEl.appendChild(btn);
  });
}

function getFinalMessage(score, total) {
  const pct = total ? Math.round((score / total) * 100) : 0;
  return `
    <strong>Your Score:</strong> ${score}/${total} (${pct}%)
    <br />
    ${pct >= 80 ? "Excellent work! Keep it up." : "Review the topic and try again for a higher score."}
  `;
}

function renderMcqForm() {
  const state = quizState.mcq;
  mcqForm.innerHTML = "";
  const total = activeMcq.questions.length;
  const progress = document.createElement("p");
  progress.className = "quiz-progress";
  progress.innerHTML = `
    <span class="meta">
      <span class="type-value">MCQ</span>
      <span>Score: <span class="score-value">${state.score}</span> | Progress: <span class="progress-value">0/${total}</span></span>
    </span>
    <span class="track"><span class="fill"></span></span>
  `;
  mcqForm.appendChild(progress);

  if (state.index >= total) {
    mcqForm.innerHTML += `<p class="game-result">Quiz complete! Great job.</p>`;
    submitMcq.textContent = "Completed";
    submitMcq.disabled = true;
    resetMcq.classList.remove("quiz-locked");
    updateQuizProgress(mcqForm, activeMcq, state, "MCQ");
    mcqResult.innerHTML = getFinalMessage(state.score, total);
    return;
  }

  const question = activeMcq.questions[state.index];
  const fieldset = document.createElement("fieldset");
  fieldset.className = "quiz-item";
  fieldset.innerHTML = `<legend>${question.q}</legend>`;
  question.options.forEach((opt, index) => {
    const id = `${activeMcq.id}-${state.index}-${index}`;
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerHTML = `
      <input id="${id}" type="radio" name="${activeMcq.id}-${state.index}" value="${index}" />
      ${opt}
    `;
    fieldset.appendChild(label);
  });
  fieldset.innerHTML += `<p id="mcqFeedback" class="game-result"></p>`;
  mcqForm.appendChild(fieldset);

  submitMcq.disabled = false;
  submitMcq.textContent = state.revealed ? "Continue" : "Next";
  updateQuizProgress(mcqForm, activeMcq, state, "MCQ");
}

function renderIdForm() {
  const state = quizState.id;
  idForm.innerHTML = "";
  const total = activeId.questions.length;
  const progress = document.createElement("p");
  progress.className = "quiz-progress";
  progress.innerHTML = `
    <span class="meta">
      <span class="type-value">Identification</span>
      <span>Score: <span class="score-value">${state.score}</span> | Progress: <span class="progress-value">0/${total}</span></span>
    </span>
    <span class="track"><span class="fill"></span></span>
  `;
  idForm.appendChild(progress);

  if (state.index >= total) {
    idForm.innerHTML += `<p class="game-result">Quiz complete! Great job.</p>`;
    submitId.textContent = "Completed";
    submitId.disabled = true;
    resetId.classList.remove("quiz-locked");
    updateQuizProgress(idForm, activeId, state, "Identification");
    idResult.innerHTML = getFinalMessage(state.score, total);
    return;
  }

  const question = activeId.questions[state.index];
  const fieldset = document.createElement("fieldset");
  fieldset.className = "quiz-item";
  const id = `${activeId.id}-${state.index}`;
  fieldset.innerHTML = `
    <legend>${question.q}</legend>
    <input id="${id}" type="text" placeholder="Type your answer here..." autocomplete="off" />
    <p id="idFeedback" class="game-result"></p>
  `;
  idForm.appendChild(fieldset);

  submitId.disabled = false;
  submitId.textContent = state.revealed ? "Continue" : "Next";
  updateQuizProgress(idForm, activeId, state, "Identification");
}

function renderTfForm() {
  const state = quizState.tf;
  tfForm.innerHTML = "";
  const total = activeTf.questions.length;
  const progress = document.createElement("p");
  progress.className = "quiz-progress";
  progress.innerHTML = `
    <span class="meta">
      <span class="type-value">Tama o Mali</span>
      <span>Score: <span class="score-value">${state.score}</span> | Progress: <span class="progress-value">0/${total}</span></span>
    </span>
    <span class="track"><span class="fill"></span></span>
  `;
  tfForm.appendChild(progress);

  if (state.index >= total) {
    tfForm.innerHTML += `<p class="game-result">Quiz complete! Great job.</p>`;
    submitTf.textContent = "Completed";
    submitTf.disabled = true;
    resetTf.classList.remove("quiz-locked");
    updateQuizProgress(tfForm, activeTf, state, "Tama o Mali");
    tfResult.innerHTML = getFinalMessage(state.score, total);
    return;
  }

  const question = activeTf.questions[state.index];
  const fieldset = document.createElement("fieldset");
  fieldset.className = "quiz-item";
  fieldset.innerHTML = `<legend>${question.q}</legend>`;
  ["Tama", "Mali"].forEach((opt, index) => {
    const id = `${activeTf.id}-${state.index}-${index}`;
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerHTML = `
      <input id="${id}" type="radio" name="${activeTf.id}-${state.index}" value="${index === 0 ? "true" : "false"}" />
      ${opt}
    `;
    fieldset.appendChild(label);
  });
  fieldset.innerHTML += `<p id="tfFeedback" class="game-result"></p>`;
  tfForm.appendChild(fieldset);

  submitTf.disabled = false;
  submitTf.textContent = state.revealed ? "Continue" : "Next";
  updateQuizProgress(tfForm, activeTf, state, "Tama o Mali");
}

function checkMcqStep() {
  const state = quizState.mcq;
  if (state.revealed) {
    state.index += 1;
    state.revealed = false;
    renderMcqForm();
    return;
  }
  const question = activeMcq.questions[state.index];
  const checked = mcqForm.querySelector(`input[name="${activeMcq.id}-${state.index}"]:checked`);
  if (!checked) {
    mcqResult.textContent = "Please choose an answer first.";
    return;
  }
  const isCorrect = Number(checked.value) === question.answer;
  if (isCorrect) state.score += 1;
  const feedback = mcqForm.querySelector("#mcqFeedback");
  if (feedback) {
    feedback.textContent = isCorrect
      ? "Correct!"
      : `Incorrect. Correct answer: ${question.options[question.answer]}`;
  }
  mcqResult.textContent = "";
  state.revealed = true;
  submitMcq.textContent = state.index === activeMcq.questions.length - 1 ? "See Result" : "Continue";
  updateQuizProgress(mcqForm, activeMcq, state, "MCQ");
}

function checkIdStep() {
  const state = quizState.id;
  if (state.revealed) {
    state.index += 1;
    state.revealed = false;
    renderIdForm();
    return;
  }
  const question = activeId.questions[state.index];
  const input = idForm.querySelector(`#${activeId.id}-${state.index}`);
  if (!input || !input.value.trim()) {
    idResult.textContent = "Please type your answer first.";
    return;
  }
  const userValue = normalizeAnswer(input.value);
  const accepted = question.answers.map(normalizeAnswer);
  const isCorrect = accepted.includes(userValue);
  if (isCorrect) state.score += 1;
  const feedback = idForm.querySelector("#idFeedback");
  if (feedback) {
    feedback.textContent = isCorrect
      ? "Correct!"
      : `Incorrect. Correct answer: ${question.answers[0]}`;
  }
  idResult.textContent = "";
  state.revealed = true;
  submitId.textContent = state.index === activeId.questions.length - 1 ? "See Result" : "Continue";
  updateQuizProgress(idForm, activeId, state, "Identification");
}

function checkTfStep() {
  const state = quizState.tf;
  if (state.revealed) {
    state.index += 1;
    state.revealed = false;
    renderTfForm();
    return;
  }
  const question = activeTf.questions[state.index];
  const checked = tfForm.querySelector(`input[name="${activeTf.id}-${state.index}"]:checked`);
  if (!checked) {
    tfResult.textContent = "Please choose Tama or Mali first.";
    return;
  }
  const isCorrect = String(question.answer) === checked.value;
  if (isCorrect) state.score += 1;
  const feedback = tfForm.querySelector("#tfFeedback");
  if (feedback) {
    feedback.textContent = isCorrect
      ? "Correct!"
      : `Incorrect. Correct answer: ${question.answer ? "Tama" : "Mali"}`;
  }
  tfResult.textContent = "";
  state.revealed = true;
  submitTf.textContent = state.index === activeTf.questions.length - 1 ? "See Result" : "Continue";
  updateQuizProgress(tfForm, activeTf, state, "Tama o Mali");
}

submitMcq.addEventListener("click", checkMcqStep);
submitId.addEventListener("click", checkIdStep);
submitTf.addEventListener("click", checkTfStep);

resetMcq.addEventListener("click", () => {
  quizState.mcq = { index: 0, score: 0, revealed: false, started: true };
  mcqResult.textContent = "";
  renderMcqForm();
});

resetId.addEventListener("click", () => {
  quizState.id = { index: 0, score: 0, revealed: false, started: true };
  idResult.textContent = "";
  renderIdForm();
});

resetTf.addEventListener("click", () => {
  quizState.tf = { index: 0, score: 0, revealed: false, started: true };
  tfResult.textContent = "";
  renderTfForm();
});

startMcq.addEventListener("click", () => {
  quizState.mcq = { index: 0, score: 0, revealed: false, started: true };
  mcqResult.textContent = "";
  renderMcqForm();
  setQuizVisibility(mcqForm, submitMcq, resetMcq, mcqResult, mcqStartWrap, true);
});

startId.addEventListener("click", () => {
  quizState.id = { index: 0, score: 0, revealed: false, started: true };
  idResult.textContent = "";
  renderIdForm();
  setQuizVisibility(idForm, submitId, resetId, idResult, idStartWrap, true);
});

startTf.addEventListener("click", () => {
  quizState.tf = { index: 0, score: 0, revealed: false, started: true };
  tfResult.textContent = "";
  renderTfForm();
  setQuizVisibility(tfForm, submitTf, resetTf, tfResult, tfStartWrap, true);
});

function onMcqTopicChange(set) {
  activeMcq = set;
  quizState.mcq = { index: 0, score: 0, revealed: false, started: false };
  mcqResult.textContent = "";
  renderTopicTabs(mcqTopicTabs, mcqQuizSets, activeMcq, onMcqTopicChange);
  renderMcqForm();
  setQuizVisibility(mcqForm, submitMcq, resetMcq, mcqResult, mcqStartWrap, false);
}

function onIdTopicChange(set) {
  activeId = set;
  quizState.id = { index: 0, score: 0, revealed: false, started: false };
  idResult.textContent = "";
  renderTopicTabs(idTopicTabs, identificationQuizSets, activeId, onIdTopicChange);
  renderIdForm();
  setQuizVisibility(idForm, submitId, resetId, idResult, idStartWrap, false);
}

function onTfTopicChange(set) {
  activeTf = set;
  quizState.tf = { index: 0, score: 0, revealed: false, started: false };
  tfResult.textContent = "";
  renderTopicTabs(tfTopicTabs, tfQuizSets, activeTf, onTfTopicChange);
  renderTfForm();
  setQuizVisibility(tfForm, submitTf, resetTf, tfResult, tfStartWrap, false);
}

renderTopicTabs(mcqTopicTabs, mcqQuizSets, activeMcq, onMcqTopicChange);
renderTopicTabs(idTopicTabs, identificationQuizSets, activeId, onIdTopicChange);
renderTopicTabs(tfTopicTabs, tfQuizSets, activeTf, onTfTopicChange);

renderMcqForm();
renderIdForm();
renderTfForm();
setQuizVisibility(mcqForm, submitMcq, resetMcq, mcqResult, mcqStartWrap, false);
setQuizVisibility(idForm, submitId, resetId, idResult, idStartWrap, false);
setQuizVisibility(tfForm, submitTf, resetTf, tfResult, tfStartWrap, false);

const triviaFacts = [
  "Noong WWI, nagkaroon ng pansamantalang tigil-putukan na tinawag na Christmas Truce noong 1914.",
  "Gumamit ng mga kalapati bilang tagapagdala ng mensahe noong WWI dahil maaasahan sila.",
  "Ang trench warfare noong WWI ay nagdulot ng 'trench foot' sa maraming sundalo.",
  "Ang China ay isa sa pinakamalaking bansang komunista sa kasalukuyan.",
  "Ang poison gas sa WWI ay maagang halimbawa ng modern chemical warfare.",
  "Ang WWII ang pinakamalawak at pinakamapaminsalang digmaan sa kasaysayan.",
  "Ang Berlin Wall ay simbolo ng paghahati ng mundo noong Cold War.",
  "Sa komunismo tulad ng Soviet Union, kontrolado ng estado ang ekonomiya.",
  "Si Karl Marx at Friedrich Engels ang may-akda ng Communist Manifesto.",
  "Ang Hiroshima at Nagasaki bombings ang nagwakas sa WWII sa Asya."
];

const triviaText = document.getElementById("triviaText");
const prevTrivia = document.getElementById("prevTrivia");
const nextTrivia = document.getElementById("nextTrivia");
const randomTrivia = document.getElementById("randomTrivia");
let triviaIndex = 0;

function renderTrivia() {
  triviaText.textContent = `${triviaIndex + 1}. ${triviaFacts[triviaIndex]}`;
}

prevTrivia.addEventListener("click", () => {
  triviaIndex = (triviaIndex - 1 + triviaFacts.length) % triviaFacts.length;
  renderTrivia();
});

nextTrivia.addEventListener("click", () => {
  triviaIndex = (triviaIndex + 1) % triviaFacts.length;
  renderTrivia();
});

randomTrivia.addEventListener("click", () => {
  triviaIndex = Math.floor(Math.random() * triviaFacts.length);
  renderTrivia();
});

renderTrivia();

const unmaskedPeople = [
  { clue: "Arkiduke ng Austria-Hungary; pagkakapaslang niya noong 1914 ang mitsa ng WWI.", answer: "Archduke Franz Ferdinand" },
  { clue: "Diktador ng Alemanya na namuno sa Nazi Party.", answer: "Adolf Hitler" },
  { clue: "Pinuno ng Soviet Union noong WWII na may mahigpit na pamahalaan.", answer: "Joseph Stalin" },
  { clue: "Pangulo ng US sa panahon ng Great Depression at WWII.", answer: "Franklin Roosevelt" },
  { clue: "Pinuno ng Soviet Union noong Cold War at Cuban Missile Crisis.", answer: "Nikita Khrushchev" },
  { clue: "Diktador ng Italya at tagapagtatag ng pasismo.", answer: "Benito Mussolini" }
];

let unmaskedIndex = 0;
const unmaskedGame = document.getElementById("unmaskedGame");

function renderUnmasked() {
  const item = unmaskedPeople[unmaskedIndex];
  unmaskedGame.innerHTML = `
    <p class="game-question">${item.clue}</p>
    <input id="unmaskedInput" type="text" placeholder="Type your answer..." />
    <div class="quiz-actions">
      <button id="checkUnmasked" class="mini-btn">Check</button>
      <button id="nextUnmasked" class="mini-btn">Next</button>
    </div>
    <p id="unmaskedResult" class="game-result"></p>
  `;

  document.getElementById("checkUnmasked").addEventListener("click", () => {
    const userAnswer = document.getElementById("unmaskedInput").value.trim().toLowerCase();
    const result = document.getElementById("unmaskedResult");
    result.textContent = userAnswer === item.answer.toLowerCase()
      ? "Correct!"
      : `Not quite. Correct answer: ${item.answer}`;
  });

  document.getElementById("nextUnmasked").addEventListener("click", () => {
    unmaskedIndex = (unmaskedIndex + 1) % unmaskedPeople.length;
    renderUnmasked();
  });
}

renderUnmasked();

const flagItems = [
  "Philippines",
  "United Kingdom",
  "France",
  "Argentina",
  "Australia",
  "China",
  "Estados Unidos",
  "Thailand",
  "South Korea",
  "Japan"
];

const flagGame = document.getElementById("flagGame");
let flagScore = 0;
let flagRound = 0;

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderFlagRound() {
  if (flagRound >= flagItems.length) {
    flagGame.innerHTML = `
      <p class="game-result">Game finished! Score: ${flagScore}/${flagItems.length}</p>
      <button id="restartFlag" class="mini-btn">Play Again</button>
    `;
    document.getElementById("restartFlag").addEventListener("click", () => {
      flagScore = 0;
      flagRound = 0;
      renderFlagRound();
    });
    return;
  }

  const answer = flagItems[flagRound];
  const choices = shuffle([answer, ...shuffle(flagItems.filter((x) => x !== answer)).slice(0, 3)]);

  flagGame.innerHTML = `
    <p class="game-question">Round ${flagRound + 1}: Select the correct country shown in this clue:</p>
    <p><strong>${answer}</strong></p>
    <div id="flagChoices"></div>
    <p id="flagResult" class="game-result"></p>
  `;

  const choiceWrap = document.getElementById("flagChoices");
  choices.forEach((choice) => {
    const b = document.createElement("button");
    b.className = "mini-btn";
    b.textContent = choice;
    b.addEventListener("click", () => {
      const res = document.getElementById("flagResult");
      if (choice === answer) {
        flagScore += 1;
        res.textContent = "Correct!";
      } else {
        res.textContent = `Wrong. Correct answer: ${answer}`;
      }
      flagRound += 1;
      setTimeout(renderFlagRound, 700);
    });
    choiceWrap.appendChild(b);
  });
}

renderFlagRound();

const decodeItems = [
  {
    title: "Imperyalismo",
    desc: "Patakaran kung saan pinalalawak ng makapangyarihang bansa ang teritoryo at impluwensya sa ibang bansa."
  },
  {
    title: "Cold War",
    desc: "Panahon ng matinding tensyon ng US at USSR matapos ang WWII nang walang direktang digmaan."
  },
  {
    title: "World War",
    desc: "Malalaking digmaang pandaigdig na kinasangkutan ng maraming bansa sa iba't ibang kontinente."
  },
  {
    title: "Kapitalismo",
    desc: "Sistemang pang-ekonomiya na pagmamay-ari ng pribadong indibidwal ang negosyo at yaman."
  },
  {
    title: "Komunismo",
    desc: "Sistemang pang-ekonomiya at pampulitika kung saan pagmamay-ari ng estado o komunidad ang ari-arian."
  }
];

const decodeGame = document.getElementById("decodeGame");
decodeItems.forEach((item, idx) => {
  const card = document.createElement("article");
  card.className = "card decode-card";
  card.innerHTML = `
    <h4>Concept ${idx + 1}</h4>
    <button class="mini-btn">Reveal</button>
    <p class="hidden"><strong>${item.title}</strong></p>
    <p class="hidden">${item.desc}</p>
  `;
  const btn = card.querySelector("button");
  const hidden = card.querySelectorAll(".hidden");
  btn.addEventListener("click", () => {
    hidden.forEach((node) => node.classList.remove("hidden"));
    btn.remove();
  });
  decodeGame.appendChild(card);
});
