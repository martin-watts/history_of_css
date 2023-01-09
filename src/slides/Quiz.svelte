<script>
  import Reveal from 'reveal.js';
  import { Row } from 'svelte-layouts';
  import Slide from '../lib/Slide.svelte';

  export let deck;

  let transitionStart = false;

  const answers = [{
    text: 'A: 1969',
    information: '- First connection on the ARPANET.'
  }, {
    text: 'B: 1978',
    information: '- TCP V3 (the birth of the Internet).'
  }, {
    text: 'C: 1991',
    information: '- The World Wide Web released.',
    correct: true
  }, {
    text: 'D: 1994',
    information: '- First proposal for CSS made.'
  }];

  $: {
    if (deck) {
      deck.on('slidechanged', event => {
        if (event.currentSlide.dataset.id === 'quiz-2') {
          transitionStart = true;
        } else {
          transitionStart = false;
        }
      });
    }
  }
</script>

<Slide data-transition="zoom-in fade-out">
  <p>The history of CSS is intrinsically linked to the history of the World Wide Web.</p>
  <p><b>Question:</b> When was the World Wide Web released?</p>
  <ul class="pt-5 pl-5 self-center list-none">
    {#each answers as answer}
      <li class="mb-16"><span class="border rounded-md p-5">{answer.text}</span></li>
    {/each}
  </ul>
</Slide>
<Slide data-transition="none" data-id="quiz-2">
  <p>The history of CSS is intrinsically linked to the history of the World Wide Web.</p>
  <p><b>Question:</b> When was the World Wide Web released?</p>
  <ul class={'pt-5 pl-5 self-center list-none ' + (transitionStart ? 'translate-x-0 transition-transform duration-1000' : 'translate-x-19p6')}>
    {#each answers as answer}
      <li class="mb-16">
        <span class={'border rounded-md p-5 ' + (transitionStart && answer.correct ? 'transition-colors duration-500 bg-olive' : '')}>{answer.text}</span>
        <span class={'ml-5 ' + (transitionStart ? 'transition-opacity duration-800 opacity-100' : 'opacity-0')}>{answer.information}</span>
      </li>
    {/each}
  </ul>
</Slide>
