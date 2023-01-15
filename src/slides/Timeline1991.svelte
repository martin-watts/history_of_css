<script>
  import Slide from '../lib/Slide.svelte';
  import Timeline from '../lib/Timeline.svelte';
  import TimelineItem from '../lib/TimelineItem.svelte';

  export let deck;
  let restartAnimation;
  let transitionStart = false;

  $: {
    if (deck) {
      deck.on('slidechanged', event => {
        if (event.currentSlide.dataset.id === 'timeline-1991') {
          transitionStart = true;
          restartAnimation();
        } else {
          transitionStart = false;
        }
      });
    }
  }
</script>

<Slide data-transition="none" data-id="timeline-1991">
  <Timeline>
    <TimelineItem bind:restartAnimation={restartAnimation} title="WWW Released" date="6th August 1991" beforeLine animateIn delayIn={false} --opacity={transitionStart ? 1 : 0}/>
  </Timeline>
</Slide>

