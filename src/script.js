/*----------------
    VARIABLES
----------------*/

// settings
let sSettingsOpen = false;
let sAnimationDuration = 0.75;
let sSecondChance = true;
let sDopamineBox = false;
// stages
let stagesSelected = "00000000000000000000000000000000000000000";
// timer
let time = 0;
let timerInterval;
// stats
let stCycleCount = 0;
let stCyclePercentage = 0;
let stWordsTested = 0;
let stWordsCorrect = 0;
let stCorrectPercentage = 0;
// dopamine box
let currentDay = (new Date(Date.now()).getDay() + 6) % 7;
let currentWeek = Math.floor(Date.now() / 86400000) - currentDay;
let dbTestsCompleted = "0000000";
// test options
let testOptionsTypes = ["cycle", "word", "s", "m"];
let testOptionsType = 0;
let testOptionsValue = 0;
// word list
let selectedWordlist = [0];
let currentWordlist = [0];
// current words
let currentWords = [0, 0, 0, 0];
let currentPrompts = ["", "", "", ""];
let currentPoss = ["", "", "", ""];
let currentFullNames = ["", "", "", ""];
let previousInput = "";
// animation states
let normalWordState = ["word-small", "word-big", "word-small", "word-gone"];
let animatedWordState = ["word-gone", "word-small", "word-big", "word-small"];
// test results
let wordResultsList = [];
let categoryTypes = ["⎁ WORD", "⌸ STAGE"];
let sortTypes = ["Ⓐ ALPHABETICAL", "🠫 INCORRECT", "🠩 CORRECT"];
let categoryType = 0;
let sortType = 0;
// states
let wait = true;
let chances = 1;
let canSelectStages = true;

/*----------------
     ELEMENTS
----------------*/

// root
let hRoot = document.querySelector(":root");
// screens
let hTestScreen = document.querySelectorAll(".test");
let hHomeScreen = document.querySelectorAll(".home");
let hEndScreen = document.querySelectorAll(".end");
// settings 
let hSettingsButton = document.querySelector(".settings-icon");
let hSettings = document.querySelector(".settings");
let hsAnimationDuration = document.getElementById("animation-duration");
let hsSecondChance = document.getElementById("second-chance");
let hsDopamineBox = document.getElementById("dopamine-box");
// stage buttons
let hStageButtons = document.querySelectorAll(".stage-button");
// stats
let hTimer = document.querySelector(".timer");
let hCycleProgress = document.querySelector(".cycle-progress-text");
let hTestProgress = document.querySelector(".test-progress-text");
let hScoreCount = document.querySelector(".score-count");
// dopamine box
let hDopamineBox = document.querySelector(".dopamine-box");
let hDBWeek = document.querySelector(".db-week");
let hDBDays = document.querySelectorAll(".db-day");
// test options input
let hTestOptions = document.getElementById("test-options");
// buttons
let hStartButton = document.querySelector(".start-button");
let hFreeButton = document.querySelector(".free-button");
let hHomeButton = document.querySelector(".home-button");
let hAgainButton = document.querySelector(".again-button");
let hTiwaButton = document.querySelector(".tiwa-button");
let hEndTestButton = document.querySelector(".end-test-button");
// current words
let hWords = document.querySelectorAll(".word");
let hCurrentInput = document.getElementById("c-input");
let hPreviousInput = document.getElementById("p-input");
let hNextInput = document.getElementById("n-input");
// end screen
let hResults = document.querySelector(".results");
let hResultBar = document.querySelector(".result-bar");
let hResultBarInner = document.querySelector(".result-bar-inner");
let hWordResults = document.querySelector(".word-results");
let hWordResultEx = document.querySelector(".word-result-example");
// results options
let hCategoryType = document.getElementById("category");
let hSortType = document.getElementById("sort");

/*----------------
     UTILITY
----------------*/

// WRITE TO LOCAL STORAGE
function write(key, value) {
  const d = new Date();
  d.setTime(d.getTime() + 86400000000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

// READ FROM LOCAL STORAGE
function read(key) {
  key = key + "=";
  let cookies = decodeURIComponent(document.cookie);
  cookies = cookies.split(";");
  for (let cookie of cookies) {
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
    if (cookie.indexOf(key) == 0) return cookie.substring(key.length, cookie.length);
    // eat(cookie);
  }
  return "";
}

// SORT BY WORDS WRONG
function sortWordsWrong(a, b) {
  if (a[1] - a[2] === b[1] - b[2]) return (a[0] < b[0]) ? -1 : 1;
  else return (a[1] - a[2] > b[1] - b[2]) ? -1 : 1;
}

// SORT BY WORDS CORRECT
function sortWordsCorrect(a, b) {
  if (a[2] == b[2]) return (a[0] < b[0]) ? -1 : 1;
  else return (a[2] > b[2]) ? -1 : 1;
}

// SORT BY ALPHABETICAL
function sortAlphabetical(a, b) {
  return (a[0] < b[0]) ? -1 : 1;
}

// REMOVE CASE AND STRIP STRING
function clean(x) {
  x = x.toLowerCase();
  x = x.trim();
  return x;
}

// CHANGE SCREEN
function changeScreen(screenNum) {
  // home screen
  for (let element of hHomeScreen) {
    if (screenNum === 0) element.style.visibility = 'visible';
    else element.style.visibility = 'hidden';
  }
  // test screen
  for (let element of hTestScreen) {
    if (screenNum === 1) element.style.visibility = 'visible';
    else element.style.visibility = 'hidden';
  }
  // end screen
  for (let element of hEndScreen) {
    if (screenNum === 2) element.style.visibility = 'visible';
    else element.style.visibility = 'hidden';
  }
}

/*----------------
     SETTINGS
----------------*/

// LOAD SETTINGS FROM LOCAL STORAGE
function loadSettings() {
  // read settings from local storage
  if (read("animation-duration") !== "") sAnimationDuration = parseFloat(read("animation-duration"));
  if (read("second-chance") !== "") sSecondChance = read("second-chance") === "true";
  if (read("dopamine-box") !== "") sDopamineBox = read("dopamine-box") === "true";
  displaySettings();
  updateSettings();
}

// DISPLAY SETTINGS VALUES 
function displaySettings() {
  // display settings in settings panel
  hsAnimationDuration.value = sAnimationDuration.toString();
  hsSecondChance.checked = sSecondChance;
  hsDopamineBox.checked = sDopamineBox;
}

// UPDATE THE SETTINGS (SAVE)
function updateSettings() {
  // animation duration
  sAnimationDuration = parseFloat(hsAnimationDuration.value);
  for (let wordElement of hWords) wordElement.style.transition = "all " + (sAnimationDuration*2/3).toString() + "s, margin-bottom " + sAnimationDuration.toString() + "s, visibility 0s";
  // second chance
  sSecondChance = hsSecondChance.checked;
  if (sSecondChance) chances = 1;
  else chances = 0;
  // dopamine box
  sDopamineBox = hsDopamineBox.checked;
  if (sDopamineBox) hDopamineBox.style.display = "block";
  else hDopamineBox.style.display = "none";
  // write settings to local storage
  write("animation-duration", sAnimationDuration.toString());
  write("second-chance", sSecondChance.toString());
  write("dopamine-box", sDopamineBox.toString());
}

// SHOW SETTINGS PANEL WHEN ICON IS CLICKED (TOGGLE)
hSettingsButton.onclick = function() {
  // toggle the settings open
  sSettingsOpen = !sSettingsOpen;
  // open or close the settings
  if (sSettingsOpen) hSettings.style.display = "block";
  if (!sSettingsOpen) hSettings.style.display = "none";
}

// update settings whenever an input field is changed
hsAnimationDuration.onkeyup = function() {updateSettings()};
hsSecondChance.onclick = function() {updateSettings()};
hsDopamineBox.onclick = function() {updateSettings()};

/*----------------
      STAGES
----------------*/

// LOAD STAGES FROM LOCAL STRAGE
function loadStages() {
  if (read("stages-selected") !== "") stagesSelected = read("stages-selected");
  displayStages();
}

// DISPLAY STAGES
function displayStages() {
  for (let i = 0; i < 41; i++) {
    if (stagesSelected[i] === "0") hStageButtons[i].style.backgroundColor = "#313244";
    else hStageButtons[i].style.backgroundColor = "#11111b";
  }
}

// STAGE SELECTION
for (let i = 0; i < 41; i++) {
  hStageButtons[i].onclick = function(event) {
    if (!canSelectStages) return;
    // shift click: toggle up to
    if (event.shiftKey) {
      if (stagesSelected[i] === "0") stagesSelected = "1".repeat(i + 1) + stagesSelected.substring(i + 1);
      else stagesSelected = "0".repeat(i + 1) + stagesSelected.substring(i + 1);
    }
    // normal click: toggle single
    else {
      if (stagesSelected[i] === "0") stagesSelected = stagesSelected.substring(0, i) + "1" + stagesSelected.substring(i + 1);
      else stagesSelected = stagesSelected.substring(0, i) + "0" + stagesSelected.substring(i + 1);
    }
    // write stages selected to local storage
    write("stages-selected", stagesSelected);
    displayStages();
    // reintialise the test
    initialise();
  }
}

/*----------------
      STATS
----------------*/

// RESET STATS
function resetStats() {
  stCycleCount = 0;
  stCyclePercentage = 0;
  stWordsTested = 0;
  stWordsCorrect = 0;
  stCorrectPercentage = 0;
}

// DISPLAY STATS
function displayStats() {
  // test progress
  stCorrectPercentage = Math.floor((stWordsCorrect / stWordsTested) * 100)
  if (stWordsTested === 0) stCorrectPercentage = 0;
  hTestProgress.textContent = stCorrectPercentage.toString() + "%";
  hRoot.style.setProperty("--test-progress-percentage", stCorrectPercentage);
  // cycle progress
  stCycleCount = Math.floor(stWordsTested / selectedWordlist.length);
  hCycleProgress.textContent = stCycleCount;
  stCyclePercentage = Math.floor(((stWordsTested % selectedWordlist.length) / selectedWordlist.length) * 100);
  if (selectedWordlist.length === 0) stCyclePercentage = 0;
  hRoot.style.setProperty("--cycle-progress-percentage", stCyclePercentage);
  // score count
  hScoreCount.textContent = stWordsCorrect.toString() + "/" + stWordsTested.toString();
}

// DISPLAY TIMER
function displayTimer() {
  hTimer.textContent = ("00" + Math.floor(time / 60)).slice(-2) + 
                 ":" + ("00" + (time % 60)).slice(-2);
}

/*----------------
   DOPAMINE BOX
----------------*/

// LOAD DOPAMINE BOX
function loadDopamineBox() {
  if (currentWeek === parseInt(read("db-week"))) {
    dbTestsCompleted = read("db-completed");
  } else {
    write("db-completed", "0000000");
    dbTestsCompleted = "0000000";
  }
  displayDopamineBox();
}

// DISPLAY DOPAMINE BOX
function displayDopamineBox() {
  for (let i = 0; i < 7; i++) {
    if (dbTestsCompleted[i] === "1") {
      hDBDays[i].style.backgroundColor = "var(--c-green)";
    }
  }
  if (dbTestsCompleted === "1111111") {
    hDBWeek.style.backgroundColor = "var(--c-green)";
  }
}

// SAVE DOPAMINE BOX
function saveDopamineBox() {
  write("db-week", currentWeek);
  write("db-completed", dbTestsCompleted);
}

/*----------------
      TEST
----------------*/

// DISPLAY ALL
function display() {
  getWordInfo();
  displayWords();
  displayStats();
}

// DISPLAY WORDS
function displayWords() {
  // prompt, pos, full name
  for (let i = 0; i < 4; i++) {
    hWords[i].querySelector(".prompt").textContent = currentPrompts[i];
    hWords[i].querySelector(".part-of-speech").textContent = currentPoss[i];
    hWords[i].querySelector(".full-name").textContent = currentFullNames[i];
  }
  // display input history
  hPreviousInput.value = previousInput;
}

// CHECK CORRECT OR NOT
function check(input, translations) {
  input = input.split(",");
  for (let i = 0; i < input.length; i++) input[i] = clean(input[i]);
  for (let i = 0; i < input.length; i++) {
    let isCorrect = false;
    for (let j = 0; j < translations.length; j++) {
      if (input[i] === clean(translations[j])) isCorrect = true;
    }
    if (!isCorrect) return false;
  }
  return true;
}

// GET INFORMATION FOR CURRENT WORDS
function getWordInfo() {
  // prompt, pos, full name
  for (let i = 0; i < 4; i++) {
    currentPrompts[i] = word[currentWords[i]][0];
    currentPoss[i] = word[currentWords[i]][2];
    currentFullNames[i] = word[currentWords[i]][1];
  }
}

// GET NEW WORD INFORMATION
function getNewWord() {
  if (currentWordlist.length === 0) {
    currentWordlist = [...selectedWordlist];
  }
  previousInput = hCurrentInput.value;
  hCurrentInput.value = hNextInput.value;
  hNextInput.value = "";
  // shift
  currentWords.splice(0, 1);
  let random = Math.floor(Math.random() * currentWordlist.length);
  currentWords.push(currentWordlist[random]);
  currentWordlist.splice(random, 1);
  display();
}

// INITIALISE WORDLIST AND WORDS
function initialise(fillSelectedWordList = true) {
  resetStats();
  // fill selected word list
  if (fillSelectedWordList) {
    selectedWordlist = [];
    let aStageIsSelected = false;
    for (let i = 0; i < 41; i++) {
      if (stagesSelected[i] === '1') { // if a stage it selected
        aStageIsSelected = true;
        // add all words in the stage
        for (let j = 0; j < stage[i].length; j++) {
          selectedWordlist.push(stage[i][j]);
        }
      }
    }
    // if no stages are selected, use buffers
    if (!aStageIsSelected) {
      selectedWordlist = [0];
    }
  }
  currentWords = [0, 0, 0, 0];
  // add words to the results list
  wordResultsList = [];
  for (let wordId of selectedWordlist) {
    wordResultsList.push([wordId, 0, 0]);
  }
  // fill up the current word list
  currentWordlist = [...selectedWordlist];
  // get 3 starting words
  for (let i = 0; i < 3; i++) {
    getNewWord();
  }
  // display
  display();
  // allow inputs
  wait = false;
  hCurrentInput.select();
}

// CHECK IF THE TEST SHOULD END
function checkEndTest() {
  // cycles
  if (testOptionsType === 0) {
    if (stCycleCount >= testOptionsValue) {
      endTest();
    }
  } 
  // words
  if (testOptionsType === 1) {
    if (stWordsTested >= testOptionsValue) {
      endTest();
    }
  }
}

// RUN
function run() {
  if (check(clean(hCurrentInput.value), word[currentWords[1]][3])) {
    if (sSecondChance) chances = 1;
    // the input is correct
    for (let i = 0; i < 4; i++) {hWords[i].classList.remove(normalWordState[i]);}
    for (let i = 0; i < 4; i++) {hWords[i].classList.add(animatedWordState[i]);}
    hCurrentInput.style.color = "#53b15a";
    // select next input
    hNextInput.readOnly = false;
    hNextInput.focus();
    wait = true;
    setTimeout(function() {
      // after the animation
      for (let i = 0; i < 4; i++) {hWords[i].classList.add("dont-animate");}
      getNewWord();
      display();
      // remove animations
      for (let i = 0; i < 4; i++) {hWords[i].classList.add(normalWordState[i]);}
      for (let i = 0; i < 4; i++) {hWords[i].classList.remove(animatedWordState[i]);}
      hCurrentInput.style.color = "#9399b2";
      hPreviousInput.style.color = "#53b15a";
      for (let i = 0; i < 4; i++) {hWords[i].offsetHeight}
      for (let i = 0; i < 4; i++) {hWords[i].classList.remove("dont-animate");}
      // update stats
      stWordsTested += 1;
      stWordsCorrect += 1;
      displayStats();
      // update word results
      for (let i = 0; i < wordResultsList.length; i++) {
        if (wordResultsList[i][0] === currentWords[0]) {
          wordResultsList[i][1] += 1;
          wordResultsList[i][2] += 1;
        }
      }
      // reselect current input
      hNextInput.readOnly = true;
      hCurrentInput.focus();
      wait = false;
    }, Math.floor(sAnimationDuration * 1000));
  }
  else {
    // the input is wrong
    if (chances) {
      wait = true;
      chances -= 1;
      hCurrentInput.classList.add("shake-animation");
      setTimeout(function() {
        hCurrentInput.classList.remove("shake-animation");
        hCurrentInput.value = "";
        wait = false;
      }, 250);
    }
    else {
      if (sSecondChance) chances = 1;
      // the input is wrong
      for (let i = 0; i < 4; i++) {hWords[i].classList.remove(normalWordState[i]);}
      for (let i = 0; i < 4; i++) {hWords[i].classList.add(animatedWordState[i]);}
      hCurrentInput.style.color = "#d9515c";
      // select next input
      hNextInput.readOnly = false;
      hNextInput.select();
      wait = true;
      setTimeout(function() {
        // after the animation
        for (let i = 0; i < 4; i++) {hWords[i].classList.add("dont-animate");}
        getNewWord();
        display();
        // remove animations
        for (let i = 0; i < 4; i++) {hWords[i].classList.add(normalWordState[i]);}
        for (let i = 0; i < 4; i++) {hWords[i].classList.remove(animatedWordState[i]);}
        hCurrentInput.style.color = "#9399b2";
        hPreviousInput.style.color = "#d9515c";
        for (let i = 0; i < 4; i++) {hWords[i].offsetHeight}
        for (let i = 0; i < 4; i++) {hWords[i].classList.remove("dont-animate");}
        // show correct translation
        let translations = word[currentWords[0]][3][0];
        for (let i = 1; i < word[currentWords[0]][3].length; i++) translations += ", " + word[currentWords[0]][3][i];
        hPreviousInput.value = translations;
        // update stats
        stWordsTested += 1;
        displayStats();
        // update word results
        for (let i = 0; i < wordResultsList.length; i++) {
          if (wordResultsList[i][0] === currentWords[0]) {
            wordResultsList[i][1] += 1;
          }
        }
        // reselect current input
        hNextInput.readOnly = true;
        hCurrentInput.select();
        wait = false;
      }, Math.floor(sAnimationDuration * 1000));
    }
  }
  // check if the test should end
  setTimeout(function() {checkEndTest()}, Math.floor(sAnimationDuration * 1000) + 5);
}

// Shuffle when the enter key is pressed
document.body.addEventListener('keydown', function (event) {
  const key = event.key;
  switch (key) {
    case "Enter":
      if (!wait) run();
  }
});

/*----------------
   HOME AND END
----------------*/

// START TEST WITH CURRENT OPTIONS
function startTest() {
  let testOptionsInput = hTestOptions.value.split(" ");
  // if not a valid test option
  if (!testOptionsTypes.includes(testOptionsInput[0]) || Number.isNaN(parseInt(testOptionsInput[1]))) {
    hTestOptions.classList.add("shake-animation");
    setTimeout(function() {hTestOptions.classList.remove("shake-animation")}, 250);
    return;
  }
  // if no stages are selected
  if (stagesSelected === "00000000000000000000000000000000000000000") {
    document.querySelector(".select-stages-prompt").classList.add("shake-animation");
    setTimeout(function() {document.querySelector(".select-stages-prompt").classList.remove("shake-animation")}, 250);
    return;
  }

  // change the screen
  changeScreen(1);
  // get settings
  testOptionsType = testOptionsTypes.indexOf(testOptionsInput[0]);
  testOptionsValue = parseInt(testOptionsInput[1]);
  // if timed test, calculate the time and start timer
  if (testOptionsType === 3) testOptionsValue = testOptionsValue * 60;
  if (testOptionsType < 2) {
    hTimer.style.visibility = "hidden";
  }
  else {
    hTimer.style.visibility = "visible";
    time = testOptionsValue;
    displayTimer();
    timerInterval = setInterval(function() {
      time -= 1;
      displayTimer();
    }, 1000);
    setTimeout(function() {
      endTest();
    }, 1000 * testOptionsValue);
  }
  // freeze stage lists
  canSelectStages = false;
  // start the test
  initialise();
}

// FREE MODE
function free() {
  // change the screen
  changeScreen(1);
  // remove test options
  testOptionsType = -1;
  testOptionsValue = 0;
  // hide the timer
  hTimer.style.visibility = "hidden";
  // start the test!
  initialise();
}

// RESTART TEST AGAIN
function again() {
  if (testOptionsType === -1) free();
  else startTest();
}

// TRY INCORRECT WORDS AGAIN
function tryIncorrectWordsAgain() {
  let testOptionsInput = hTestOptions.value.split(" ");
  // make list
  selectedWordlist = [];
  for (let result of wordResultsList) {
    if (result[1] - result[2] > 0) {
      selectedWordlist.push(result[0]);
    }
  }
  // if no wrong words (shake animation)
  if (selectedWordlist.length === 0) {
    hTiwaButton.classList.add("shake-animation");
    setTimeout(function() {hTiwaButton.classList.remove("shake-animation")}, 250);
    return;
  }
  // change the screen
  changeScreen(1);
  // get settings
  testOptionsType = testOptionsTypes.indexOf(testOptionsInput[0]);
  testOptionsValue = parseInt(testOptionsInput[1]);
  // if timed test, calculate the time and start timer
  if (testOptionsType === 3) testOptionsValue = testOptionsValue * 60;
  if (testOptionsType < 2) {
    hTimer.style.visibility = "hidden";
  }
  else {
    hTimer.style.visibility = "visible";
    time = testOptionsValue;
    displayTimer();
    timerInterval = setInterval(function() {
      time -= 1;
      displayTimer();
    }, 1000);
    setTimeout(function() {
      endTest();
    }, 1000 * testOptionsValue);
  }
  // freeze stage lists
  canSelectStages = false;
  // start the test
  initialise(false);
}

// LOAD RESULT OPTIONS
function loadResultOptions() {
  if (read("category") === "") write("category", categoryType);
  if (read("sort") === "") write("sort", sortType);
  categoryType = parseInt(read("category"));
  sortType = parseInt(read("sort"));
}

// DISPLAY WORD RESULTS
function displayWordResults() {
  hCategoryType.textContent = categoryTypes[categoryType];
  hSortType.textContent = sortTypes[sortType];
  write("category", categoryType);
  write("sort", sortType);

  let resultsList = [];
  if (categoryType === 0) resultsList = [...wordResultsList];
  if (categoryType === 1) {
    for (let i = 0; i < stage.length; i++) {
      let numTested = 0, numCorrect = 0;
      for (let result of wordResultsList) {
        if (stage[i].includes(result[0])) {
          numTested += result[1];
          numCorrect += result[2];
        }
      }
      if (i === 40) resultsList.push(["Extra list", numTested, numCorrect]);
      else resultsList.push([i + 1, numTested, numCorrect]);
    }
  }

  // show individual word results
  if (sortType === 0) resultsList.sort(sortAlphabetical);
  if (sortType === 1) resultsList.sort(sortWordsWrong);
  if (sortType === 2) resultsList.sort(sortWordsCorrect);
  hWordResults.innerHTML = ``;
  for (let result of resultsList) {
    // don't show if the word wasn't tested
    if (result[1] === 0) continue;
    // create an element
    let wordResultElement = document.createElement("div");
    wordResultElement.classList.add("word-result");
    wordResultElement.innerHTML = `
      <div style="display:flex">
        <div class="word-result-word"></div>
        <div class="word-result-translation"></div>
        <div class="word-result-stats"></div>
      </div>
      <div class="word-result-bar">
        <div class="word-result-bar-inner"></div>
      </div>
    `;
    // display the stats
    if (categoryType === 0) {
      wordResultElement.querySelector(".word-result-word").textContent = word[result[0]][0];
      let translationsText = "";
      for (let j = 0; j < word[result[0]][3].length; j++) {
        translationsText += word[result[0]][3][j];
        if (j != word[result[0]][3].length - 1) translationsText += ", ";
      }
      wordResultElement.querySelector(".word-result-translation").textContent = translationsText;
    }
    if (categoryType === 1) {
      if (result[0] === "Extra list") wordResultElement.querySelector(".word-result-word").textContent = result[0];
      else wordResultElement.querySelector(".word-result-word").textContent = "Stage " + result[0].toString();
    }
    wordResultElement.querySelector(".word-result-stats").textContent = result[2].toString() + "/" + result[1].toString();
    wordResultElement.querySelector(".word-result-bar-inner").style.width = Math.floor(result[2] / result[1] * 580).toString() + "px";
    // append the element to the word results
    hWordResults.appendChild(wordResultElement);
  }
}

// RESULT OPTION BUTTONS
hCategoryType.onclick = function() {
  categoryType = (categoryType + 1) % 2;
  displayWordResults();
}

hSortType.onclick = function() {
  sortType = (sortType + 1) % 3;
  displayWordResults();
}

// END THE TEST AND SHOW RESULTS
function endTest() {
  // if 50% or above and >= 10 words correct, complete dopamine box for this day
  if (stWordsCorrect / stWordsTested >= 0.5 && stWordsCorrect >= 10) {
    dbTestsCompleted = dbTestsCompleted.substring(0, currentDay) + "1" + dbTestsCompleted.substring(currentDay + 1);
    saveDopamineBox();
    displayDopamineBox();
  }  
  // change the screen
  changeScreen(2);
  // show overall results with result bar and results
  hResults.textContent = stWordsCorrect.toString() + "/" + stWordsTested.toString();
  hResultBarInner.style.width = Math.floor(stWordsCorrect / stWordsTested * 500).toString() + "px";
  // show word results
  displayWordResults();
  // allow changing stages
  canSelectStages = true;
  // reset timer
  clearInterval(timerInterval);
  time = 0;
  // prevent inputs
  wait = true;
}

// NAVIGATION BUTTONS
hStartButton.onclick = function() {startTest()};
hFreeButton.onclick = function() {free()};
hHomeButton.onclick = function() {changeScreen(0)};
hAgainButton.onclick = function() {again()};
hTiwaButton.onclick = function() {tryIncorrectWordsAgain()};
hEndTestButton.onclick = function() {endTest()};

// LOAD ALL STUFF AND CHANGE SCREEN
loadSettings();      // settings
loadStages();        // selected stages
loadDopamineBox();   // dopamine box stats
loadResultOptions(); // result options

changeScreen(0);