const panels = document.querySelectorAll(".panel");
const navLinks = document.querySelectorAll(".nav-link");
const goButtons = document.querySelectorAll("[data-go]");

function showSection(id) {
  panels.forEach((panel) => panel.classList.toggle("visible", panel.id === id));
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.target === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => showSection(link.dataset.target));
});

goButtons.forEach((btn) => {
  btn.addEventListener("click", () => showSection(btn.dataset.go));
});

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

const quizSets = [
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

const quizTabs = document.getElementById("quizTabs");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const submitQuizBtn = document.getElementById("submitQuiz");
const resetQuizBtn = document.getElementById("resetQuiz");
let activeQuiz = quizSets[0];

function renderQuizTabs() {
  quizTabs.innerHTML = "";
  quizSets.forEach((set) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tab ${set.id === activeQuiz.id ? "active" : ""}`;
    btn.textContent = set.title;
    btn.addEventListener("click", () => {
      activeQuiz = set;
      renderQuizTabs();
      renderQuizForm();
      quizResult.textContent = "";
    });
    quizTabs.appendChild(btn);
  });
}

function renderQuizForm() {
  quizForm.innerHTML = "";
  const progress = document.createElement("p");
  progress.className = "quiz-progress";
  progress.textContent = `Questions: ${activeQuiz.questions.length}`;
  quizForm.appendChild(progress);

  activeQuiz.questions.forEach((question, i) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "quiz-item";
    fieldset.innerHTML = `<legend>${question.q}</legend>`;

    question.options.forEach((opt, index) => {
      const id = `${activeQuiz.id}-${i}-${index}`;
      const label = document.createElement("label");
      label.setAttribute("for", id);
      label.innerHTML = `
        <input id="${id}" type="radio" name="${activeQuiz.id}-${i}" value="${index}" />
        ${opt}
      `;
      fieldset.appendChild(label);
    });
    quizForm.appendChild(fieldset);
  });
}

submitQuizBtn.addEventListener("click", () => {
  let score = 0;
  const total = activeQuiz.questions.length;

  activeQuiz.questions.forEach((question, i) => {
    const checked = quizForm.querySelector(`input[name="${activeQuiz.id}-${i}"]:checked`);
    if (checked && Number(checked.value) === question.answer) {
      score += 1;
    }
  });

  const pct = Math.round((score / total) * 100);
  quizResult.innerHTML = `
    <strong>Your Score:</strong> ${score}/${total} (${pct}%)
    <br />
    ${pct >= 80 ? "Excellent work! Keep it up." : "Review the topic and try again for a higher score."}
  `;
});

resetQuizBtn.addEventListener("click", () => {
  quizForm.reset();
  quizResult.textContent = "";
});

renderQuizTabs();
renderQuizForm();

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
