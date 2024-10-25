<script>
  import StageList from "./components/StageList.svelte";
  import Navbar from "./components/Navbar.svelte";

  import Start from "./components/pages/Start.svelte";
  import Tester from "./components/pages/Tester.svelte";
  import End from "./components/pages/End.svelte";
</script>

<main>
  <Navbar />
  <StageList />

  <Start />
  <!-- <Tester />
  <End /> -->
</main>