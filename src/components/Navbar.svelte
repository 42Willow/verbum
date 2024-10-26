<script>
  import { sSettingsOpen, testOptionsValue, testOptionsType } from '../js/store';

  function toggleSettings() {
    console.log('toggleSettings');
    sSettingsOpen.update(value => !value);
  }
</script>

<div class="top-bar">
  <!-- VERBUM -->
  <div class="verbum-title">Verbum</div>
  <div class="description">vocabulary tester for CLC</div>
  <!-- Status Bar (info about the test) -->
  <div class="status-bar test">
    <!-- Timer -->
    {#if $testOptionsType >= 2}
    <div class="timer test">{("00" + Math.floor($testOptionsValue / 60)).slice(-2) + ":" + ("00" + ($testOptionsValue % 60)).slice(-2)}</div>
    {/if}
    <!-- Test Progress (percentage correct) -->
    <svg width="40" height="40" viewBox="0 0 40 40" class="test-progress" xmlns="http://www.w3.org/2000/svg">
      <circle class="bg"></circle>
      <circle class="fg"></circle>
      <text class="test-progress-text" x="50%" y="52%" text-anchor="middle" fill="white" 
      font-size="9px" font-family="Golos Text" dy=".3em" style="user-select: none;">--%</text>
    </svg>
    <!-- Cycle Progress (number and percentage of cycles) -->
    <svg width="40" height="40" viewBox="0 0 40 40" class="cycle-progress" xmlns="http://www.w3.org/2000/svg">
      <circle class="bg"></circle>
      <circle class="fg"></circle>
      <text class="cycle-progress-text" x="50%" y="52%" text-anchor="middle" fill="white" 
      font-size="12px" font-family="Golos Text" dy=".3em" style="user-select: none;">-</text>
    </svg>
    <!-- Number of words correct / Number of words tested -->
    <div class="score-count">--/--</div>
  </div>
  <div class="settings-icon" on:click={toggleSettings}>
    <i class="fa-solid fa-gear fa-xl"></i>
  </div>
</div>