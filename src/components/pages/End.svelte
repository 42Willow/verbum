<script>

  import { goHome } from "../../js/utils";

</script>
<div class="review end">
  Test results
  <div class="results">0/0</div>
  <div class="result-bar"><div class="result-bar-inner"></div></div>
  <div style="display:flex">
    <button id="category" class="choose"></button>
    <button id="sort" class="choose"></button>
  </div>
  <div class="word-results">

  </div>
  <div style="display:flex">
    <div class="home-button" on:click={goHome}>Home</div>
    <div class="again-button">Again</div>
    <div class="tiwa-button">TIWA</div>
  </div>
</div>