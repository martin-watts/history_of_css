<script>
  import 'reveal.js/dist/reveal.css';

  import Reveal from 'reveal.js';
  import { onMount, tick } from 'svelte';

  import Presentation from './Presentation.svelte';

  export let app;
  export let reveal;

  let deck;

  onMount(async () => {
    await tick();
    deck = new Reveal(reveal);
    deck.initialize();
  });
</script>

<svelte:head>
  <title>{app.name}</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <Presentation deck={deck}/>
  </div>
</div>

