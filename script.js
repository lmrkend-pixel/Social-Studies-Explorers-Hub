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
  },
  {
    id: "glob-mcq",
    title: "Globalisasyon",
    questions: [
      {
        q: "1) Ano ang pinakamalapit na kahulugan ng globalisasyon?",
        options: [
          "Pagkakahiwalay ng mga bansa",
          "Pagsasama-sama ng ekonomiya, kultura, at politika ng mga bansa",
          "Pagkontrol ng isang bansa sa lahat",
          "Pagbawas ng teknolohiya"
        ],
        answer: 1,
        explanation: "Ang globalisasyon ay proseso ng pag-uugnay ng mga bansa sa aspeto ng ekonomiya, kultura, at politika sa pamamagitan ng teknolohiya at kalakalan."
      },
      {
        q: "2) Alin sa sumusunod ang halimbawa ng political globalization?",
        options: [
          "Pag-usbong ng K-pop",
          "Pagbuo ng ASEAN",
          "Pagtaas ng export",
          "Pagkain ng fusion food"
        ],
        answer: 1,
        explanation: "Ang ASEAN ay isang pandaigdigang organisasyon na nagpapakita ng kooperasyong politikal sa pagitan ng mga bansa."
      },
      {
        q: "3) Bakit sinasabing may epekto ang globalisasyon sa soberanya ng estado?",
        options: [
          "Nawawala ang kultura",
          "Tumataas ang populasyon",
          "Naiimpluwensyahan ng pandaigdigang kasunduan ang desisyon ng bansa",
          "Lahat ng bansa ay nagiging pareho"
        ],
        answer: 2,
        explanation: "Dahil sa treaties at international agreements, may mga desisyong kailangang iayon ng bansa sa pandaigdigang pamantayan."
      },
      {
        q: "4) Ano ang pangunahing layunin ng free trade?",
        options: [
          "Pataas ang presyo ng produkto",
          "Pigilan ang kalakalan",
          "Palayain ang daloy ng produkto sa pagitan ng bansa",
          "Limitahan ang import"
        ],
        answer: 2,
        explanation: "Layunin ng free trade na alisin ang hadlang tulad ng tariffs upang mapadali ang palitan ng produkto."
      },
      {
        q: "5) Alin ang pinakamainam na halimbawa ng outsourcing?",
        options: [
          "Pagbili ng lokal na produkto",
          "Paglipat ng produksyon sa ibang bansa para makatipid",
          "Pagtaas ng buwis",
          "Pag-aaral ng kultura"
        ],
        answer: 1,
        explanation: "Ang outsourcing ay pag-delegate ng trabaho o produksyon sa ibang bansa upang mabawasan ang gastos."
      },
      {
        q: "6) Ano ang maaaring negatibong epekto ng economic globalization?",
        options: [
          "Pagdami ng trabaho",
          "Pagbaba ng presyo",
          "Pagkalugi ng lokal na negosyo",
          "Pag-unlad ng teknolohiya"
        ],
        answer: 2,
        explanation: "Dahil sa kompetisyon mula sa murang imported goods, nahihirapan ang lokal na negosyo na makipagsabayan."
      },
      {
        q: "7) Ano ang ibig sabihin ng hybridization ng kultura?",
        options: [
          "Pagkawala ng kultura",
          "Pagkopya ng banyagang kultura",
          "Paghahalo ng lokal at banyagang kultura",
          "Pag-iwas sa ibang kultura"
        ],
        answer: 2,
        explanation: "Nagkakaroon ng bagong anyo ng kultura mula sa pagsasanib ng lokal at dayuhang impluwensya."
      },
      {
        q: "8) Alin ang halimbawa ng homogenization?",
        options: [
          "Pagkakaiba-iba ng kultura",
          "Pagkakaroon ng natatanging tradisyon",
          "Pagiging magkakatulad ng kultura dahil sa global influence",
          "Pag-unlad ng lokal na wika"
        ],
        answer: 2,
        explanation: "Ang homogenization ay nagreresulta sa pagkakapareho ng kultura dahil sa malakas na impluwensya ng global media at brands."
      },
      {
        q: "9) Paano nakakatulong ang globalisasyon sa global citizenship?",
        options: [
          "Nagiging makasarili ang tao",
          "Lumalawak ang responsibilidad sa kapwa-tao sa buong mundo",
          "Nawawala ang komunikasyon",
          "Nababawasan ang kaalaman"
        ],
        answer: 1,
        explanation: "Dahil sa globalisasyon, mas nagiging mulat ang tao sa isyu ng ibang bansa at nagkakaroon ng pakikiisa."
      },
      {
        q: "10) Ano ang pinakamainam na solusyon sa hamon ng globalisasyon?",
        options: [
          "Iwasan ang ibang bansa",
          "Itigil ang kalakalan",
          "Isulong ang sustainable lifestyle at ethical consumption",
          "Isara ang internet"
        ],
        answer: 2,
        explanation: "Ang responsableng pamumuhay ay tumutulong upang mabawasan ang negatibong epekto ng globalisasyon."
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
  },
  {
    id: "glob-id",
    title: "Globalisasyon",
    questions: [
      {
        q: "1) Ano ang pinakamalapit na kahulugan ng globalisasyon?",
        answers: [
          "pagsasama-sama ng ekonomiya, kultura, at politika ng mga bansa",
          "globalisasyon"
        ],
        explanation: "Ang globalisasyon ay proseso ng pag-uugnay ng mga bansa sa aspeto ng ekonomiya, kultura, at politika."
      },
      {
        q: "2) Alin ang halimbawa ng political globalization?",
        answers: ["asean", "asean organization"],
        explanation: "Ang ASEAN ay organisasyong nagtataguyod ng kooperasyong politikal sa pagitan ng mga bansa."
      },
      {
        q: "3) Bakit may epekto ang globalisasyon sa soberanya ng estado?",
        answers: ["pandaigdigang kasunduan", "international agreements", "treaties"],
        explanation: "Dahil sa treaties at international agreements, may mga desisyong kailangang iayon ng bansa sa pamantayan."
      },
      {
        q: "4) Ano ang pangunahing layunin ng free trade?",
        answers: ["palayain ang daloy ng produkto", "alisin ang tariffs", "free flow of products"],
        explanation: "Nilalayon nitong alisin ang hadlang tulad ng tariffs para mapadali ang palitan ng produkto."
      },
      {
        q: "5) Ano ang outsourcing?",
        answers: ["paglipat ng produksyon sa ibang bansa", "delegate work to another country", "pag-delegate ng trabaho"],
        explanation: "Ang outsourcing ay pag-delegate ng trabaho/produksyon sa ibang lugar para makatipid."
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
  },
  {
    id: "glob-tf",
    title: "Globalisasyon",
    questions: [
      {
        q: "1) Ang globalisasyon ay nag-uugnay sa mga bansa sa pamamagitan ng teknolohiya at kalakalan.",
        answer: true,
        explanation: "Ito ang pangunahing mekanismo kung paano nagiging konektado ang mga bansa."
      },
      {
        q: "2) Walang epekto ang globalisasyon sa lokal na trabaho.",
        answer: false,
        explanation: "Maaaring makalikha o makabawas ito ng trabaho depende sa sitwasyon."
      },
      {
        q: "3) Ang multinational corporations ay nag-ooperate sa iisang bansa lamang.",
        answer: false,
        explanation: "Ang MNCs ay kumikilos sa maraming bansa upang palawakin ang negosyo."
      },
      {
        q: "4) Ang global supply chain ay kinabibilangan ng produksyon sa iba’t ibang bansa.",
        answer: true,
        explanation: "Iba’t ibang bahagi ng produkto ay ginagawa sa iba’t ibang bansa."
      },
      {
        q: "5) Ang cultural globalization ay nagpapalaganap ng media at internet culture.",
        answer: true,
        explanation: "Media at internet ang pangunahing daluyan ng pagkalat ng kultura."
      },
      {
        q: "6) Ang homogenization ay nagpapalakas ng lokal na identidad.",
        answer: false,
        explanation: "Ito ay nagdudulot ng pagkawala o paghina ng lokal na kultura."
      },
      {
        q: "7) Ang globalisasyon ay maaaring magdulot ng hindi pantay na distribusyon ng yaman.",
        answer: true,
        explanation: "Mas nakikinabang ang mayayamang bansa kaysa sa umuunlad."
      },
      {
        q: "8) Ang global citizenship ay nangangahulugang responsibilidad lamang sa sariling bansa.",
        answer: false,
        explanation: "Saklaw nito ang pananagutan sa buong mundo."
      },
      {
        q: "9) Ang transnational advocacy networks ay tumutulong sa global issues tulad ng climate change.",
        answer: true,
        explanation: "Pinag-uugnay nito ang mga tao para sa sama-samang aksyon."
      },
      {
        q: "10) Ang sustainable lifestyle ay walang kinalaman sa globalisasyon.",
        answer: false,
        explanation: "Ito ay mahalagang tugon upang mabawasan ang epekto ng globalisasyon."
      }
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

function autoStartQuiz(pageId) {
  if (pageId === "mcqPage" && startMcq) startMcq.click();
  if (pageId === "idPage" && startId) startId.click();
  if (pageId === "tfPage" && startTf) startTf.click();
}

quizPageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetPage = btn.dataset.quizPage;
    const currentActive = Array.from(quizPages).find((p) => p.classList.contains("active"))?.id;
    if (targetPage === currentActive) return;
    showQuizConfirmModal({
      title: "Ready to Take Quiz?",
      body:
        "Click Start to begin the quiz. Answer one question at a time, then move to the next question.",
      yesText: "Start Quiz",
      noText: "Cancel",
      onYes: () => {
        switchQuizPage(targetPage);
        autoStartQuiz(targetPage);
      }
    });
  });
});

function showQuizConfirmModal({ title, body, yesText, noText, onYes }) {
  // Ensure single modal at a time
  const existing = document.querySelector(".quiz-modal-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.className = "quiz-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "quiz-modal";

  modal.innerHTML = `
    <p class="quiz-modal-title">🎯 ${title}</p>
    <div class="quiz-modal-body">
      <p style="margin: 0;">${body}</p>
    </div>
    <div class="quiz-modal-actions">
      <button type="button" class="quiz-modal-btn quiz-modal-btn-primary">${yesText}</button>
      <button type="button" class="quiz-modal-btn quiz-modal-btn-cancel">${noText}</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const removeModal = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKeyDown);
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) removeModal();
  });

  const yesBtn = modal.querySelector("button.quiz-modal-btn-primary");
  const noBtn = modal.querySelector("button.quiz-modal-btn-cancel");
  yesBtn.addEventListener("click", () => {
    removeModal();
    if (typeof onYes === "function") onYes();
  });
  noBtn.addEventListener("click", removeModal);

  const onKeyDown = (e) => {
    if (e.key === "Escape") removeModal();
  };
  document.addEventListener("keydown", onKeyDown);
}

function updateQuizProgress(formEl, quizSet, state, typeTag) {
  const total = quizSet.questions.length;
  const answered = Math.min(state.index + (state.revealed ? 1 : 0), total);
  const currentQuestion = Math.min(state.index + 1, total);
  const progressNode = formEl.querySelector(".quiz-progress");
  if (!progressNode) return;

  const pct = total ? Math.round((answered / total) * 100) : 0;
  const fill = progressNode.querySelector(".fill");
  const scoreNode = progressNode.querySelector(".score-value");
  const progress = progressNode.querySelector(".progress-value");

  const typeNode = progressNode.querySelector(".type-value");

  if (fill) fill.style.width = `${pct}%`;
  if (scoreNode) scoreNode.textContent = state.score;
  if (progress) progress.textContent = `${currentQuestion} of ${total}`;
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
      <span>Question <span class="progress-value">0 of ${total}</span></span>
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
      <span>Question <span class="progress-value">0 of ${total}</span></span>
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
      <span>Question <span class="progress-value">0 of ${total}</span></span>
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
      ? `Correct! ${question.explanation ? ` ${question.explanation}` : ""}`
      : `Incorrect. Correct answer: ${question.options[question.answer]}${question.explanation ? ` — ${question.explanation}` : ""}`;
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
      ? `Correct! ${question.explanation ? ` ${question.explanation}` : ""}`
      : `Incorrect. Correct answer: ${question.answers[0]}${question.explanation ? ` — ${question.explanation}` : ""}`;
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
      ? `Correct! ${question.explanation ? ` ${question.explanation}` : ""}`
      : `Incorrect. Correct answer: ${question.answer ? "Tama" : "Mali"}${question.explanation ? ` — ${question.explanation}` : ""}`;
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

  // --- Topic cards UI (select topic -> reveal module with 3 quiz types) ---
  const quizTopicGrid = document.getElementById("quizTopicGrid");
  const quizModuleArea = document.getElementById("quizModuleArea");
  const quizBackToTopics = document.getElementById("quizBackToTopics");
  const quizModuleTitle = document.getElementById("quizModuleTitle");

  if (quizTopicGrid && quizModuleArea && quizModuleTitle) {
    const topicModules = [
      { key: "imp", title: "Imperyalismo at Kolonyalismo", mcqId: "imp", idId: "imp-id", tfId: "imp-tf" },
      { key: "ww1", title: "Unang Digmaang Pandaigdig", mcqId: "ww1", idId: "ww1-id", tfId: "ww1-tf" },
      { key: "ww2", title: "Ikalawang Digmaang Pandaigdig", mcqId: "ww2", idId: "ww2-id", tfId: "ww2-tf" },
      { key: "cold", title: "Cold War", mcqId: "cold", idId: "cold-id", tfId: "cold-tf" },
      { key: "glob", title: "Globalisasyon", mcqId: "glob-mcq", idId: "glob-id", tfId: "glob-tf" }
    ];

    function setModuleForTopic(topic) {
      const mcqSet = mcqQuizSets.find((s) => s.id === topic.mcqId);
      const idSet = identificationQuizSets.find((s) => s.id === topic.idId);
      const tfSet = tfQuizSets.find((s) => s.id === topic.tfId);
      if (!mcqSet || !idSet || !tfSet) return;

      quizModuleTitle.textContent = topic.title;

      // Reveal module UI
      quizModuleArea.classList.remove("quiz-module-hidden");
      quizTopicGrid.classList.add("quiz-hidden");
      quizTopicGrid.style.display = "none";

      // Force first quiz type tab on topic switch (MCQ)
      switchQuizPage("mcqPage");

      // Update active topic for all quiz types
      onMcqTopicChange(mcqSet);
      onIdTopicChange(idSet);
      onTfTopicChange(tfSet);
    }

    quizTopicGrid.innerHTML = "";
    topicModules.forEach((t, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-topic-card quiz-topic-card-available";
      btn.innerHTML = `
        <div class="quiz-topic-card-top">
          <span class="quiz-topic-index">${idx + 1}</span>
          <span class="quiz-topic-status">AVAILABLE</span>
        </div>
        <div class="quiz-topic-card-title">${t.title}</div>
        <div class="quiz-topic-card-sub">Start this module</div>
        <div class="quiz-topic-card-cta">Start Quiz</div>
      `;
      btn.addEventListener("click", () => setModuleForTopic(t));
      quizTopicGrid.appendChild(btn);
    });

    if (quizBackToTopics) {
      quizBackToTopics.addEventListener("click", () => {
        quizModuleArea.classList.add("quiz-module-hidden");
        quizTopicGrid.classList.remove("quiz-hidden");
        quizTopicGrid.style.display = "";
      });
    }
  }

const triviaFacts = [
  {
    topic: "Christmas Truce (1914)",
    fact: "Noong Unang Digmaang Pandaigdig, nagkaroon ng pansamantalang tigil-putukan na kilala bilang Christmas Truce noong 1914. Sa panahong ito, tumigil ang ilang sundalo sa labanan at nagkaroon ng mapayapang interaksyon."
  },
  {
    topic: "Messenger Pigeons sa WWI",
    fact: "Gumamit ng mga kalapati bilang tagapagdala ng mensahe noong WWI dahil mas maaasahan sila kaysa sa ibang paraan ng komunikasyon. May mga kalapati na ginawaran pa ng parangal dahil sa kanilang kontribusyon."
  },
  {
    topic: "Trench Warfare at Trench Foot",
    fact: "Ang trench warfare noong Unang Digmaang Pandaigdig ay nagdulot ng matinding kondisyon sa kalusugan ng mga sundalo. Marami ang nagkaroon ng sakit na trench foot dahil sa matagal na pagkababad sa putik at tubig."
  },
  {
    topic: "China at Komunismo",
    fact: "Ang China ay isa sa pinakamalaking bansang komunista sa kasalukuyan. Naitatag ang pamahalaang komunista matapos ang Chinese Revolution sa pamumuno ni Mao Zedong. Hanggang ngayon, nananatili itong may impluwensya sa pandaigdigang politika at ekonomiya."
  },
  {
    topic: "Poison Gas sa WWI",
    fact: "Ang paggamit ng poison gas noong Unang Digmaang Pandaigdig ay isa sa mga unang halimbawa ng chemical warfare sa modernong panahon. Kabilang dito ang chlorine at mustard gas na nagdulot ng matinding pinsala sa baga at balat. Dahil dito, nagkaroon ng pandaigdigang kasunduan upang limitahan ang paggamit ng ganitong uri ng sandata."
  },
  {
    topic: "World War II Casualties",
    fact: "Ang World War II ang pinakamalawak at pinakamapaminsalang digmaan sa kasaysayan. Mahigit 70 milyong tao ang nasawi sa digmaang ito."
  },
  {
    topic: "Berlin Wall",
    fact: "Ang Berlin Wall ay simbolo ng paghahati ng mundo sa panahon ng Cold War. Pinaghiwalay nito ang East at West Germany hanggang sa ito ay bumagsak noong 1989."
  },
  {
    topic: "Ekonomiya sa Komunismo",
    fact: "Sa ilalim ng komunismo, tulad sa Soviet Union, kontrolado ng estado ang ekonomiya at yaman ng bansa. Layunin nitong alisin ang agwat sa pagitan ng mayaman at mahirap."
  },
  {
    topic: "Communist Manifesto",
    fact: "Si Karl Marx at si Friedrich Engels ang nagsulat ng Communist Manifesto. Ipinapaliwanag nito ang mga ideya ng komunismo at laban sa kapitalismo."
  },
  {
    topic: "Hiroshima at Nagasaki",
    fact: "Ang Hiroshima and Nagasaki bombings ang nagwakas sa World War II sa Asia. Ito ang unang paggamit ng atomic bomb sa digmaan."
  }
];

const triviaList = document.getElementById("triviaList");

if (triviaList) {
  triviaFacts.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card trivia-item";
    card.innerHTML = `
      <h4>${item.topic}</h4>
      <p>${item.fact}</p>
    `;
    triviaList.appendChild(card);
  });
}

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
