<script>
  import { onMount } from "svelte";
  import { sAnimationDuration, sDopamineBox, sSecondChance, chances, sSettingsOpen } from "../js/store";


  // UPDATE THE SETTINGS (SAVE)
  // function updateSettings() {
  //   // animation duration
  //   sAnimationDuration.set(parseFloat(hsAnimationDuration.value));
  //   $sAnimationDuration = parseFloat(hsAnimationDuration.value); // Update local variable
  //   for (let wordElement of hWords) {
  //     wordElement.style.transition = `all ${($sAnimationDuration * 2 / 3).toString()}s, margin-bottom ${$sAnimationDuration.toString()}s, visibility 0s`;
  //   }
  // }

  onMount(() => {
    // displaySettings();
    // updateSettings();
  });

  function handleKeyPress(event) {
    return event.charCode !== 8 && event.charCode === 0 || (event.charCode === 46 || (event.charCode >= 48 && event.charCode <= 57));
  }
</script>

{#if $sSettingsOpen}
<div class="settings">
  <div class="settings-icon-back"></div>
  Settings
  <div class="settings-label">Animation duration</div>
  <input
    id="animation-duration"
    class="settings-input-text"
    type="text"
    autocomplete="off"
    maxlength="10"
    on:keypress={handleKeyPress}
    bind:value={$sAnimationDuration}
  >
  <br><div class="settings-label">Second chance</div>
  <input
    id="second-chance"
    class="settings-input-toggle"
    type="checkbox"
    bind:checked={$sSecondChance}
  >
  <br><div class="settings-label">Daily tests</div>
  <input
    id="dopamine-box"
    class="settings-input-toggle"
    type="checkbox"
    bind:checked={$sDopamineBox}
  >
</div>
{/if}