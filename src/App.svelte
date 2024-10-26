<script>
  import StageList from "./components/StageList.svelte";
  import Navbar from "./components/Navbar.svelte";

  import Start from "./components/pages/Start.svelte";
  import Tester from "./components/pages/Test.svelte";
  import End from "./components/pages/End.svelte";
  import { sCurrentScreen } from "./js/store";
</script>

<main>
  <Navbar />
  <StageList />

  {#if $sCurrentScreen === 0}
    <Start />    
  {/if}
  {#if $sCurrentScreen === 1}
    <Tester />
  {/if}
  {#if $sCurrentScreen === 2}
    <End />
  {/if}
</main>