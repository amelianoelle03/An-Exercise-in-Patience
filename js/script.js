const artifacts = [
  {
    era: "Early settlement · c. 800 BCE",
    title: "The small vessel",
    description:
      "A cup made for ordinary mornings. Someone shaped it slowly, knowing it would be held many times.",
  },
  {
    era: "Coastal trade · c. 120 CE",
    title: "A blue bead",
    description:
      "A tiny piece of color carried a long way. Not everything valuable is large enough to notice at first.",
  },
  {
    era: "The quiet layer · unknown",
    title: "A message in clay",
    description:
      "The mark is unfinished. Its meaning waited beneath the soil, asking only that someone continue.",
  },
];

const modal = document.querySelector("#artifactModal");
const title = document.querySelector("#artifactTitle");
const era = document.querySelector("#artifactEra");
const description = document.querySelector("#artifactDescription");
const count = document.querySelector("#findCount");
const progress = document.querySelector("#progressFill");
const status = document.querySelector("#digStatus");
const soundToggle = document.querySelector("#soundToggle");

let findNumber = 0;
let timer;

function scheduleFind() {
  clearTimeout(timer);

  // The pause changes each time:
  // discovery cannot be predicted or demanded.
  const waitingTime = 9000 + Math.random() * 17000;

  timer = setTimeout(revealArtifact, waitingTime);
  status.textContent = "Carefully clearing soil...";
}

function revealArtifact() {
  const artifact = artifacts[findNumber % artifacts.length];

  findNumber += 1;

  era.textContent = artifact.era;
  title.textContent = artifact.title;
  description.textContent = artifact.description;

  count.textContent = `${findNumber} ${
    findNumber === 1 ? "find" : "finds"
  }`;

  progress.style.width = `${Math.min(96, findNumber * 31)}%`;
  status.textContent = "A moment worth noticing.";

  modal.hidden = false;

  document.querySelector("#continueButton").focus();
}

function closeArtifact() {
  modal.hidden = true;
  scheduleFind();
}

document
  .querySelector("#closeModal")
  .addEventListener("click", closeArtifact);

document
  .querySelector("#continueButton")
  .addEventListener("click", closeArtifact);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeArtifact();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeArtifact();
  }
});

soundToggle.addEventListener("click", () => {
  const isOn = soundToggle.getAttribute("aria-pressed") === "true";

  soundToggle.setAttribute("aria-pressed", String(!isOn));
  soundToggle.textContent = `Sound: ${isOn ? "off" : "on"}`;
});

scheduleFind();
