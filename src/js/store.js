// @ts-nocheck
import { writable } from 'svelte/store';

// settings
export const sSettingsOpen = writable(false);
export const sAnimationDuration = writable(0.75);
export const sSecondChance = writable(true);
export const sDopamineBox = writable(false);
export const sCurrentScreen = writable(0);

// stages
export const stagesSelected = writable("00000000000000000000000000000000000000000");

// timer
export const time = writable(0);
export let timerInterval;

// stats
export const stCycleCount = writable(0);
export const stCyclePercentage = writable(0);
export const stWordsTested = writable(0);
export const stWordsCorrect = writable(0);
export const stCorrectPercentage = writable(0);

// dopamine box
export const currentDay = writable((new Date(Date.now()).getDay() + 6) % 7);
export const currentWeek = writable(Math.floor(Date.now() / 86400000) - currentDay);
export const dbTestsCompleted = writable("0000000");

// test options
export const testOptionsTypes = writable(["cycle", "word", "s", "m"]);
export const testOptionsType = writable(0); // 0 = cycle, 1 = word, 2 = second, 3 = minute
export const testOptionsValue = writable(0); // number of cycles, words, or seconds (minutes are converted)

// word list
export const selectedWordlist = writable([0]);
export const currentWordlist = writable([0]);

// current words
export const currentWords = writable([0, 0, 0, 0]);
export const currentPrompts = writable(["", "", "", ""]);
export const currentPoss = writable(["", "", "", ""]);
export const currentFullNames = writable(["", "", "", ""]);
export const previousInput = writable("");

// animation states
export const normalWordState = writable(["word-small", "word-big", "word-small", "word-gone"]);
export const animatedWordState = writable(["word-gone", "word-small", "word-big", "word-small"]);

// test results
export const wordResultsList = writable([]);
export const categoryTypes = writable(["⎁ WORD", "⌸ STAGE"]);
export const sortTypes = writable(["Ⓐ ALPHABETICAL", "🠫 INCORRECT", "🠩 CORRECT"]);
export const categoryType = writable(0);
export const sortType = writable(0);

// states
export const wait = writable(true);
export const chances = writable(1);
export const canSelectStages = writable(true);