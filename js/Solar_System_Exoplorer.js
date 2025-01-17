const planetInfo = {
  mercury: {
      level: 1,
      title: "Mercury",
      videoUrl: "vid/planets/Mercury.mp4",
      facts: [
          ["Which planet is closest to the Sun?", ["Mercury", "Venus", "Mars", "Earth"], 0],
          ["What is Mercury's orbital period?", ["88 days", "225 days", "365 days", "687 days"], 0],
          ["Does Mercury have any moons?", ["No", "Yes, 1", "Yes, 2", "Yes, 3"], 0],
          ["What is Mercury's surface temperature range?", ["-173°C to 427°C", "-100°C to 400°C", "-50°C to 350°C", "-200°C to 500°C"], 0],
          ["What is Mercury primarily composed of?", ["Metallic core and silicate mantle", "Gas", "Ice", "Rock"], 0],
          ["What causes Mercury's extreme temperature fluctuations?", ["Lack of atmosphere", "Proximity to the Sun", "Its slow rotation", "All of the above"], 3],
          ["What is Mercury's largest crater called?", ["Caloris Basin", "Ritchey Crater", "Humboldt Crater", "Eiteneuer Crater"], 0],
          ["How long does Mercury take to rotate once on its axis?", ["59 days", "88 days", "176 days", "365 days"], 0],
          ["What is Mercury's average distance from the Sun?", ["58 million km", "108 million km", "150 million km", "228 million km"], 0],
          ["Is Mercury a terrestrial planet?", ["Yes", "No", "Only partially", "Depends on definition"], 0]
      ]
  },
  venus: {
      level: 2,
      title: "Venus",
      videoUrl: "vid/planets/Venus.mp4",
      facts: [
          ["What is the surface temperature of Venus?", ["462°C", "100°C", "50°C", "200°C"], 0],
          ["How long is a day on Venus?", ["243 Earth days", "116 Earth days", "365 Earth days", "30 Earth days"], 0],
          ["Does Venus have moons?", ["No", "Yes, 1", "Yes, 2", "Yes, 3"], 0],
          ["What is Venus's atmosphere primarily composed of?", ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], 0],
          ["What phenomenon causes Venus's extreme greenhouse effect?", ["Thick CO2 atmosphere trapping heat", "Proximity to the Sun", "Solar flares", "Lack of magnetic field"], 0],
          ["Is Venus hotter than Mercury?", ["Yes", "No", "Same temperature", "Depends on location"], 0],
          ["What is the longest mountain range on Venus called?", ["Maxwell Montes", "Olympus Mons", "Rheasilvia", "East-Central Mountain Range"], 0],
          ["What is Venus's orbital period around the Sun?", ["225 Earth days", "88 Earth days", "365 Earth days", "687 Earth days"], 0],
          ["Has Venus experienced volcanic activity?", ["Yes", "No", "Uncertain", "Only in the past"], 0],
          ["What is Venus often called due to its brightness?", ["Morning Star or Evening Star", "Red Planet", "Blue Planet", "Twin Earth"], 0]
      ]
  },
  earth: {
      level: 3,
      title: "Earth",
      videoUrl: "vid/planets/Earth.mp4",
      facts: [
          ["What is the surface temperature of Earth?", ["15°C", "100°C", "50°C", "200°C"], 0],
          ["What percentage of Earth's surface is covered by water?", ["71%", "50%", "30%", "90%"], 0],
          ["Does Earth have a natural satellite?", ["Yes, the Moon", "No", "Yes, multiple moons", "Depends on definition"], 0],
          ["What is Earth's atmosphere primarily composed of?", ["Nitrogen and Oxygen", "Carbon Dioxide and Methane", "Hydrogen and Helium", "Argon and Neon"], 0],
          ["What layer of Earth is responsible for tectonic movements?", ["Mantle", "Crust", "Core", "Atmosphere"], 0],
          ["What is the longest mountain range on Earth?", ["Mid-Atlantic Ridge", "Andes Mountains", "Rocky Mountains", "Himalayas"], 0],
          ["How long does Earth take to rotate once on its axis?", ["24 hours", "12 hours", "365 days", "30 days"], 0],
          ["What is Earth's orbital period around the Sun?", ["365.25 days", "88 days", "225 days", "687 days"], 0],
          ["What is the largest ocean on Earth?", ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], 0],
          ["Is Earth the only planet known to support life?", ["As far as we know, yes", "No", "Several others", "Depends on definition"], 0]
      ]
  },
  mars: {
      level: 4,
      title: "Mars",
      videoUrl: "vid/planets/Mars.mp4",
      facts: [
          ["What is the surface temperature of Mars?", ["-67°C", "100°C", "50°C", "200°C"], 0],
          ["Does Mars have liquid water on its surface?", ["No, currently", "Yes, abundantly", "Only during the day", "Only at the poles"], 0],
          ["What is the largest volcano on Mars called?", ["Olympus Mons", "Mauna Loa", "Mount Everest", "Quetzalcoatlus"], 0],
          ["How long is a day on Mars?", ["24.6 hours", "12 hours", "48 hours", "36 hours"], 0],
          ["What is the orbital period of Mars around the Sun?", ["687 Earth days", "225 Earth days", "365 Earth days", "88 Earth days"], 0],
          ["Does Mars have moons?", ["Yes, Phobos and Deimos", "No", "Yes, one moon", "Depends on definition"], 0],
          ["What phenomenon causes Mars's red color?", ["Iron oxide prevalent on the surface", "Presence of chromium", "Mars's thick atmosphere", "Methane clouds"], 0],
          ["Is Mars a terrestrial planet?", ["Yes", "No", "Partially", "Depends on definition"], 0],
          ["What was the first successful rover on Mars?", ["Sojourner", "Curiosity", "Opportunity", "Spirit"], 0],
          ["Does Mars have seasons?", ["Yes", "No", "Only in the northern hemisphere", "Only in the southern hemisphere"], 0]
      ]
  },
  jupiter: {
      level: 5,
      title: "Jupiter",
      videoUrl: "vid/planets/Jupiter.mp4",
      facts: [
          ["What is the diameter of Jupiter?", ["142,984 km", "100,000 km", "50,000 km", "200,000 km"], 0],
          ["How many moons does Jupiter have?", ["92 known moons", "53 moons", "79 moons", "Jupiter has no moons"], 0],
          ["What is the Great Red Spot on Jupiter?", ["A giant storm", "A mountain", "A moon", "A volcanic region"], 0],
          ["What is Jupiter primarily composed of?", ["Hydrogen and Helium", "Rock and Metal", "Water and Ice", "Carbon Dioxide"], 0],
          ["How long does Jupiter take to orbit the Sun?", ["12 Earth years", "88 Earth days", "5 Earth years", "30 Earth years"], 0],
          ["What causes Jupiter's strong magnetic field?", ["Its rapid rotation and metallic hydrogen", "Its large size", "Presence of iron core", "Orbital resonance with moons"], 0],
          ["Is Jupiter the largest planet in our solar system?", ["Yes", "No", "Second largest after Saturn", "Depends on measurement"], 0],
          ["What distinguishes Jupiter's magnetosphere?", ["Its immense size and strength", "Presence of rings", "High number of moons", "Its color"], 0],
          ["What phenomenon is commonly observed in Jupiter's atmosphere?", ["Lightning storms", "Volcanic eruptions", "Tidal waves", "Frozen gas clouds"], 0],
          ["Does Jupiter have rings?", ["Yes, faint rings", "No rings", "Large, bright rings", "Only temporary rings"], 0]
      ]
  },
  saturn: {
      level: 6,
      title: "Saturn",
      videoUrl: "vid/planets/Saturn.mp4",
      facts: [
          ["What is the diameter of Saturn?", ["116,460 km", "100,000 km", "50,000 km", "200,000 km"], 0],
          ["How many rings does Saturn have?", ["7 main rings", "14 rings", "3 rings", "No rings"], 0],
          ["What is Saturn primarily composed of?", ["Hydrogen and Helium", "Rock and Metal", "Water and Ice", "Carbon Dioxide"], 0],
          ["How long does Saturn take to orbit the Sun?", ["29.5 Earth years", "12 Earth years", "88 Earth days", "5 Earth years"], 0],
          ["What distinguishes Saturn's rings?", ["Their composition of ice and rock", "Their color", "Their thickness", "They are the brightest in the solar system"], 0],
          ["How many moons does Saturn have?", ["145 known moons", "82 moons", "53 moons", "Jupiter has more moons"], 0],
          ["What is the most famous moon of Saturn called?", ["Titan", "Enceladus", "Mimas", "Dione"], 0],
          ["Does Saturn have a solid surface?", ["No, it's a gas giant", "Yes", "Only partially", "Depends on depth"], 0],
          ["What phenomenon is observed on Saturn's poles?", ["Hexagonal storm", "Great Red Spot", "Volcanic eruptions", "Lightning storms"], 0],
          ["Is Saturn the second largest planet in our solar system?", ["Yes", "No", "Third largest", "Depends on measurement"], 0]
      ]
  },
  uranus: {
      level: 7,
      title: "Uranus",
      videoUrl: "vid/planets/Uranus.mp4",
      facts: [
          ["What is the diameter of Uranus?", ["51,118 km", "100,000 km", "50,000 km", "200,000 km"], 0],
          ["What is unique about Uranus's rotation?", ["It rotates on its side", "It rotates exceptionally fast", "It has a retrograde rotation", "It doesn't rotate"], 0],
          ["How many moons does Uranus have?", ["27 known moons", "82 moons", "53 moons", "No moons"], 0],
          ["What are the primary components of Uranus's atmosphere?", ["Hydrogen, Helium, and Methane", "Oxygen and Nitrogen", "Carbon Dioxide and Methane", "Hydrogen and Nitrogen"], 0],
          ["How long does Uranus take to orbit the Sun?", ["84 Earth years", "29.5 Earth years", "12 Earth years", "5 Earth years"], 0],
          ["Does Uranus have rings?", ["Yes, faint rings", "No rings", "Large, bright rings", "Only temporary rings"], 0],
          ["What is the coldest planet in our solar system?", ["Neptune", "Uranus", "Saturn", "Jupiter"], 1],
          ["What drives the weather patterns on Uranus?", ["Internal heat source", "Solar energy", "Gravitational interactions", "Magnetic fields"], 2],
          ["Is Uranus considered an ice giant?", ["Yes", "No", "It's a terrestrial planet", "It's a gas giant"], 0],
          ["What is the most common ice on Uranus?", ["Water ice", "Ammonia ice", "Methane ice", "Carbon dioxide ice"], 2]
      ]
  },
  neptune: {
      level: 8,
      title: "Neptune",
      videoUrl: "vid/planets/Neptune.mp4",
      facts: [
          ["What is the diameter of Neptune?", ["49,528 km", "100,000 km", "50,000 km", "200,000 km"], 0],
          ["How many moons does Neptune have?", ["14 known moons", "82 moons", "53 moons", "No moons"], 0],
          ["What is the largest moon of Neptune called?", ["Triton", "Nereid", "Proteus", "Larissa"], 0],
          ["What is the primary component of Neptune's atmosphere?", ["Hydrogen and Helium with methane", "Oxygen and nitrogen", "Carbon dioxide and methane", "Hydrogen and nitrogen"], 0],
          ["How long does Neptune take to orbit the Sun?", ["164.8 Earth years", "84 Earth years", "29.5 Earth years", "12 Earth years"], 0],
          ["Does Neptune have rings?", ["Yes, faint rings", "No rings", "Large, bright rings", "Only temporary rings"], 0],
          ["What phenomenon is observed in Neptune's atmosphere?", ["Great Dark Spot", "Great Red Spot", "Hexagonal storm", "Lightning storms"], 0],
          ["Is Neptune an ice giant?", ["Yes", "No", "It's a terrestrial planet", "It's a gas giant"], 0],
          ["What drives the strong winds on Neptune?", ["Internal heat source", "Solar energy", "Gravitational interactions", "Magnetic fields"], 0],
          ["What is the most common ice on Neptune?", ["Water ice", "Ammonia ice", "Methane ice", "Carbon dioxide ice"], 2]
      ]
  }
};

// Assign levels to planets based on planetInfo
const planetsOrder = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
let currentUnlockedLevel = 1; // Initially, only Sun (0) and first planet are unlocked

const solarSystem = document.getElementById('solar-system');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const pauseOrbitBtn = document.getElementById('pause-orbit');
const asteroidBelt = document.getElementById('asteroid-belt');
let currentZoom = 0.9;
const minZoom = 0.2;
const maxZoom = 3;
const zoomStep = 0.1;
let orbitPaused = false;

// Quiz state
let quizState = {
  questions: [],
  currentQuestionIndex: 0,
  correctAnswers: 0,
  totalQuestions: 10,
  celestialBody: null,
  quizSection: null,
  shuffledOptions: []
};

function initializeLevels() {
  planetsOrder.forEach((planetName, index) => {
      const planetEl = document.getElementById(planetName);
      if (!planetEl) return;
      const planetLevel = planetInfo[planetName].level;
      if (planetLevel > currentUnlockedLevel) {
          planetEl.classList.add('locked');
      } else {
          planetEl.classList.remove('locked');
      }
  });
}

function setZoom(zoom) {
  currentZoom = Math.max(minZoom, Math.min(maxZoom, zoom));
  solarSystem.style.transform = `translate(-50%, -50%) scale(${currentZoom})`;
}

zoomInBtn.addEventListener('click', () => setZoom(currentZoom + zoomStep));
zoomOutBtn.addEventListener('click', () => setZoom(currentZoom - zoomStep));
solarSystem.addEventListener('wheel', e => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -zoomStep : zoomStep;
  setZoom(currentZoom + delta);
});

pauseOrbitBtn.addEventListener('click', () => {
  orbitPaused = !orbitPaused;
  const orbits = document.querySelectorAll('.orbit svg');
  orbits.forEach(svg => {
      svg.style.animationPlayState = orbitPaused ? 'paused' : 'running';
  });
  const animatedElements = ['sun', ...planetsOrder];
  animatedElements.forEach(name => {
      const planetEl = document.getElementById(name);
      if (planetEl) {
          planetEl.style.animationPlayState = orbitPaused ? 'paused' : 'running';
      }
  });
  pauseOrbitBtn.textContent = orbitPaused ? '▶️' : '⏸️';
});

const planets = [{
  name: "Mercury",
  texture: "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
  size: 30,
  orbit: 140,
  period: 5
}, {
  name: "Venus",
  texture: "https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg",
  size: 50,
  orbit: 180,
  period: 8
}, {
  name: "Earth",
  texture: "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg",
  size: 50,
  orbit: 220,
  period: 12
}, {
  name: "Mars",
  texture: "https://www.solarsystemscope.com/textures/download/2k_mars.jpg",
  size: 30,
  orbit: 260,
  period: 20
}, {
  name: "Jupiter",
  texture: "https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg",
  size: 110,
  orbit: 350,
  period: 30
}, {
  name: "Saturn",
  texture: "https://www.solarsystemscope.com/textures/download/2k_saturn.jpg",
  size: 100,
  orbit: 450,
  period: 40
}, {
  name: "Uranus",
  texture: "https://www.solarsystemscope.com/textures/download/2k_uranus.jpg",
  size: 50,
  orbit: 540,
  period: 50
}, {
  name: "Neptune",
  texture: "https://www.solarsystemscope.com/textures/download/2k_neptune.jpg",
  size: 50,
  orbit: 630,
  period: 60
}];

planets.forEach(planet => {
  const planetEl = document.createElement('div');
  planetEl.className = 'planet';
  planetEl.id = planet.name.toLowerCase();
  planetEl.style.width = `${planet.size}px`;
  planetEl.style.height = `${planet.size}px`;
  planetEl.style.backgroundImage = `url('${planet.texture}')`;
  planetEl.style.top = '50%';
  planetEl.style.left = '50%';
  planetEl.style.position = 'absolute';
  solarSystem.appendChild(planetEl);
});

function animatePlanets() {
  if (orbitPaused) {
      requestAnimationFrame(animatePlanets);
      return;
  }
  const now = Date.now();
  planets.forEach(planet => {
      const planetEl = document.getElementById(planet.name.toLowerCase());
      if (!planetEl) return;
      const angle = (now / 1000 / planet.period) * 2 * Math.PI;
      const orbitRadius = planet.orbit;
      const x = Math.cos(angle) * orbitRadius;
      const y = Math.sin(angle) * orbitRadius;
      planetEl.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animatePlanets);
}
animatePlanets();

function createAsteroids(count) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
      const asteroid = document.createElement('div');
      asteroid.className = 'asteroid';
      const angle = Math.random() * Math.PI * 2;
      const distance = 280 + Math.random() * 80;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      asteroid.style.transform = `translate(${x}px, ${y}px)`;
      fragment.appendChild(asteroid);
  }
  asteroidBelt.appendChild(fragment);
}
createAsteroids(500);

function animateAsteroids() {
  if (orbitPaused) {
      requestAnimationFrame(animateAsteroids);
      return;
  }
  const asteroids = asteroidBelt.children;
  const now = Date.now();
  for (let asteroid of asteroids) {
      const transform = asteroid.style.transform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
      if (transform) {
          let x = parseFloat(transform[1]);
          let y = parseFloat(transform[2]);
          const angle = Math.atan2(y, x) + 0.0005;
          const distance = Math.sqrt(x * x + y * y);
          asteroid.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
      }
  }
  requestAnimationFrame(animateAsteroids);
}
animateAsteroids();

let isDragging = false;
let startX, startY, startTranslateX, startTranslateY;

solarSystem.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  const transform = window.getComputedStyle(solarSystem).getPropertyValue('transform');
  if (transform === 'none') {
      startTranslateX = 0;
      startTranslateY = 0;
  } else {
      const matrix = new DOMMatrix(transform);
      startTranslateX = matrix.m41;
      startTranslateY = matrix.m42;
  }
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  const newX = startTranslateX + dx;
  const newY = startTranslateY + dy;
  solarSystem.style.transform = `translate(${newX}px, ${newY}px) scale(${currentZoom})`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

setZoom(currentZoom);

function createStars() {
  const starCount = 500;
  const starContainer = document.getElementById('star-container');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = Math.random() * 0.5 + 0.1;
      fragment.appendChild(star);
  }
  starContainer.appendChild(fragment);
}
createStars();

function createDistantStars() {
  const distantStarCount = 300;
  const distantStarsContainer = document.getElementById('distant-stars');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < distantStarCount; i++) {
      const star = document.createElement('div');
      star.className = 'distant-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      fragment.appendChild(star);
  }
  distantStarsContainer.appendChild(fragment);
}
createDistantStars();

function showInfoPanel(celestialBody) {
  const info = planetInfo[celestialBody];
  if (!info) {
      return;
  }
  const panel = document.getElementById('info-panel');
  const title = panel.querySelector('.info-title');
  const videoContainer = panel.querySelector('.video-container iframe');
  const quizSection = panel.querySelector('.quiz-section');
  const quizQuestion = panel.querySelector('.quiz-question');
  const quizOptions = panel.querySelector('.quiz-options');
  const quizProgress = panel.querySelector('.quiz-progress');

  if (info.level > currentUnlockedLevel) {
      // Planet is locked
      title.textContent = "Locked";
      videoContainer.src = "";
      quizSection.style.display = 'none';
      quizProgress.style.display = 'none';
      panel.classList.add('active');
      return;
  }

  title.textContent = info.title;
  videoContainer.src = info.videoUrl;
  quizSection.style.display = 'flex';
  quizProgress.style.display = 'block';
  document.getElementById('current-question').textContent = '0';
  document.getElementById('total-questions').textContent = Math.min(10, info.facts.length).toString();

  panel.classList.add('active');

  // Initialize quiz state
  quizState.questions = shuffleArray([...info.facts]).slice(0, 10);
  quizState.currentQuestionIndex = 0;
  quizState.correctAnswers = 0;
  quizState.celestialBody = celestialBody;
  quizState.quizSection = quizSection;
  quizState.shuffledOptions = [];
  quizState.totalQuestions = Math.min(10, quizState.questions.length);

  displayNextQuestion();
}

function displayNextQuestion() {
  if (quizState.currentQuestionIndex >= quizState.totalQuestions) {
      finalizeQuiz();
      return;
  }
  const questionData = quizState.questions[quizState.currentQuestionIndex];
  if (!questionData) {
      finalizeQuiz();
      return;
  }
  const quizQuestion = quizState.quizSection.querySelector('.quiz-question');
  const quizOptions = quizState.quizSection.querySelector('.quiz-options');
  const currentQuestionSpan = document.getElementById('current-question');

  if (!quizQuestion || !quizOptions || !currentQuestionSpan) {
      console.error("Quiz elements not found");
      return;
  }

  quizQuestion.textContent = questionData[0];
  quizOptions.innerHTML = '';
  currentQuestionSpan.textContent = (quizState.currentQuestionIndex + 1).toString();

  const shuffledOptions = shuffleOptions(questionData[1], questionData[2]);
  quizState.shuffledOptions = shuffledOptions;

  shuffledOptions.forEach(option => {
      const button = document.createElement('button');
      button.className = 'quiz-option';
      button.textContent = option.text;
      button.addEventListener('click', () => handleQuizAnswer(button, option.originalIndex));
      quizOptions.appendChild(button);
  });
}

function handleQuizAnswer(button, selectedIndex) {
  const questionData = quizState.questions[quizState.currentQuestionIndex];
  if (!questionData) return;
  const correctIndex = questionData[2];
  const quizOptions = quizState.quizSection.querySelector('.quiz-options');
  if (!quizOptions) return;

  if (selectedIndex === correctIndex) {
      button.classList.add('correct');
      quizState.correctAnswers += 1;
  } else {
      button.classList.add('wrong');
      // Highlight the correct answer
      quizState.shuffledOptions.forEach(option => {
          if (option.originalIndex === correctIndex) {
              const buttons = Array.from(quizOptions.querySelectorAll('button'));
              const correctButton = buttons.find(btn => btn.textContent === option.text);
              if (correctButton) {
                  correctButton.classList.add('correct');
              }
          }
      });
  }

  // Disable all options
  const allButtons = quizOptions.querySelectorAll('button');
  allButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.cursor = 'default';
  });

  // Proceed to next question after a short delay
  setTimeout(() => {
      quizState.currentQuestionIndex += 1;
      displayNextQuestion();
  }, 1000);
}

function finalizeQuiz() {
  const panel = document.getElementById('info-panel');
  const quizSection = panel.querySelector('.quiz-section');
  const quizQuestion = panel.querySelector('.quiz-question');
  const quizProgress = panel.querySelector('.quiz-progress');

  if (!quizSection || !quizQuestion || !quizProgress) {
      console.error("Quiz elements not found during finalization");
      return;
  }

  quizSection.innerHTML = '';
  const finalMessage = document.createElement('div');
  finalMessage.className = 'quiz-question';
  finalMessage.textContent = `You answered ${quizState.correctAnswers} out of ${quizState.totalQuestions} correctly.`;
  quizSection.appendChild(finalMessage);
  quizProgress.style.display = 'none';

  if (quizState.correctAnswers >= 5) {
      alert("Congratulations! You've unlocked the next level.");
      unlockNextLevel();
  } else {
      alert("You need at least 5 correct answers to unlock the next level. Please try again!");
  }
}

function unlockNextLevel() {
  const currentLevel = quizState.celestialBody === 'sun' ? 0 : planetInfo[quizState.celestialBody].level;
  const nextLevel = currentLevel + 1;
  if (nextLevel > planetsOrder.length) {
      alert("Congratulations! You've unlocked all levels.");
      return;
  }
  currentUnlockedLevel = Math.max(currentUnlockedLevel, nextLevel);
  const nextPlanetName = planetsOrder[nextLevel - 1];
  const nextPlanetEl = document.getElementById(nextPlanetName);
  if (nextPlanetEl) {
      nextPlanetEl.classList.remove('locked');
  }
  saveGameProgress();
}

function attachPlanetClickHandlers() {
  const sunEl = document.getElementById('sun');
  if (sunEl) {
      sunEl.addEventListener('click', () => {
          showInfoPanel('sun');
      });
  }
  planets.forEach(planet => {
      const planetEl = document.getElementById(planet.name.toLowerCase());
      if (planetEl) {
          planetEl.addEventListener('click', () => {
              showInfoPanel(planet.name.toLowerCase());
          });
      }
  });
}

function loadGameProgress() {
  const savedData = localStorage.getItem('solarSystemGame');
  if (savedData) {
      try {
          const data = JSON.parse(savedData);
          currentUnlockedLevel = data.currentUnlockedLevel || 1;
      } catch (e) {
          console.error("Error parsing saved game data:", e);
          currentUnlockedLevel = 1;
      }
  }
  initializeLevels();
}

function saveGameProgress() {
  try {
      localStorage.setItem('solarSystemGame', JSON.stringify({
          currentUnlockedLevel: currentUnlockedLevel
      }));
      alert("Progress saved successfully!");
  } catch (e) {
      console.error("Error saving game progress:", e);
  }
}

function deleteGameProgress() {
  localStorage.removeItem('solarSystemGame');
  currentUnlockedLevel = 1;
  initializeLevels();
  alert("Progress deleted successfully!");
}

document.addEventListener('DOMContentLoaded', function () {
  loadGameProgress();
  attachPlanetClickHandlers();
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('info-panel').classList.remove('active');
});

document.getElementById('close-dashboard').addEventListener('click', () => {
  document.getElementById('dashboard').classList.remove('active');
});

// Utility functions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleOptions(options, correctIndex) {
  let shuffled = options.map((option, index) => ({ text: option, originalIndex: index }));
  shuffled = shuffleArray(shuffled);
  return shuffled;
}

// Toggle Dashboard Visibility via Leaderboard Icons
document.getElementById('leaderboard-icon-left').addEventListener('click', (e) => {
  e.preventDefault();
  const dashboard = document.getElementById('dashboard');
  dashboard.classList.toggle('active');
});

document.getElementById('leaderboard-icon-right').addEventListener('click', (e) => {
  e.preventDefault();
  const dashboard = document.getElementById('dashboard');
  dashboard.classList.toggle('active');
});

// Toggle Dashboard Visibility via 'd' key
document.addEventListener('keydown', (e) => {
  if (e.key === 'd' || e.key === 'D') {
      const dashboard = document.getElementById('dashboard');
      dashboard.classList.toggle('active');
  }
});