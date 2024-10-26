<script>
  import { onMount } from 'svelte';
  import { stagesSelected, canSelectStages } from '../js/store';
  import { get } from 'svelte/store';

  let hStageButtons = [];

 // @ts-ignore
   $: displayStageColours(); // will be called whenever stagesSelected changes

  function displayStageColours() {
    for (let i = 0; i < 41; i++) {
      if (hStageButtons[i]) {
        hStageButtons[i].style.backgroundColor = get(stagesSelected)[i] === "0" ? "#313244" : "#11111b";
      }
    }
  }

  // @ts-ignore
  function handleStageClick(event, index) {
    // console.log("handleStageClick", event, index);
    if (!get(canSelectStages)) return;

    if (event.shiftKey) {
      if (get(stagesSelected)[index] === "0") {
        stagesSelected.update(value => "1".repeat(index + 1) + value.substring(index + 1));
      } else {
        stagesSelected.update(value => "0".repeat(index + 1) + value.substring(index + 1));
      }
    } else {
      if (get(stagesSelected)[index] === "0") {
        stagesSelected.update(value => value.substring(0, index) + "1" + value.substring(index + 1));
      } else {
        stagesSelected.update(value => value.substring(0, index) + "0" + value.substring(index + 1));
      }
    }
    displayStageColours();
    // TODO: reinitialize the test
  }

  onMount(() => {
    displayStageColours();
    // @ts-ignore
    hStageButtons = document.querySelectorAll(".stage-button");
  });
</script>

<div class="stage-lists">
  <!-- 1-20 -->
  <div class="stage-list">
    {#each Array.from({ length: 20 }, (_, i) => i + 1) as stage}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div 
        class="stage-button"
        on:click={(event) => handleStageClick(event, stage-1)}
      >
      {stage}
      </div>
    {/each}
  </div>
  <!-- 21-40 -->
  <div class="stage-list">
    {#each Array.from({ length: 20 }, (_, i) => i + 21) as stage}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div 
        class="stage-button"
        on:click={(event) => handleStageClick(event, stage-1)}
      >
      {stage}
      </div>
    {/each}
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="stage-button stage-41-button"
    on:click={(event) => handleStageClick(event, 41-1)}
  >
  extra list
  </div>
</div>
