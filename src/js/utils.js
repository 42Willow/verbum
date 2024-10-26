import { sCurrentScreen, testOptionsTypes, stagesSelected, testOptionsType, testOptionsValue, timerInterval, canSelectStages } from "./store";
import { get } from 'svelte/store';

export function startTest() {
    let hTestOptions = document.getElementById("test-options");
    // @ts-ignore
    let testOptionsInput = hTestOptions.value.split(" ");
    // if not a valid test option
    if (!get(testOptionsTypes).includes(testOptionsInput[0]) || Number.isNaN(parseInt(testOptionsInput[1]))) {
      hTestOptions.classList.add("shake-animation");
      setTimeout(function() {hTestOptions.classList.remove("shake-animation")}, 250);
      return;
    }
    // if no stages are selected
    if (get(stagesSelected) === "00000000000000000000000000000000000000000") {
      document.querySelector(".select-stages-prompt").classList.add("shake-animation");
      setTimeout(function() {document.querySelector(".select-stages-prompt").classList.remove("shake-animation")}, 250);
      return;
    }
  
    // change the screen
    sCurrentScreen.set(1);

    // get settings
    testOptionsType.set(get(testOptionsTypes).indexOf(testOptionsInput[0]));
    testOptionsValue.set(parseInt(testOptionsInput[1]));
    
    // if minutes, convert to seconds
    if (get(testOptionsType) === 3) {
      testOptionsValue.set(get(testOptionsValue) * 60);
    }

    // start timer
    setInterval(function() {
      testOptionsValue.update(n => n - 1);
    }, 1000);

    // freeze stage lists
    canSelectStages.set(false);

    // start the test
    console.log("init test");
    // initialise();
}

export function endTest() {
    sCurrentScreen.set(2);
}

export function goHome() {
    sCurrentScreen.set(0);
}