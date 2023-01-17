<script>
  import Slide from '../lib/Slide.svelte';
  import Timeline from '../lib/Timeline.svelte';
  import TimelineItem from '../lib/TimelineItem.svelte';

  export let deck;
  let restartAnimationLast;
  let restartAnimationNext;
  let transitionStart = false;

  $: {
    if (deck) {
      deck.on('slidechanged', event => {
        if (event.currentSlide.dataset.id === 'timeline-1994-2') {
          transitionStart = true;
          restartAnimationLast();
          restartAnimationNext();
        } else {
          transitionStart = false;
        }
      });
    }
  }
</script>

<Slide data-transition="none">
  <Timeline>
    <TimelineItem title="WWW Released" date="6th August 1991" beforeLine afterLine/>
    <TimelineItem title="NCSA Mosaic v1.0" date="23rd April 1993" beforeLine />
  </Timeline>
</Slide>
<Slide data-transition="none" data-id="timeline-1994-2">
  <Timeline>
    <TimelineItem title="WWW Released" date="6th August 1991" beforeLine afterLine --margin-left={transitionStart ? '-27rem' : 0} />
    <TimelineItem bind:restartAnimation={restartAnimationLast} title="NCSA Mosaic v1.0" date="23rd April 1993" beforeLine afterLine animateOut/>
    <TimelineItem bind:restartAnimation={restartAnimationNext} title="CHSS Proposal" date="10th October 1994" beforeLine animateIn --opacity={transitionStart ? 100 : 0}/>
  </Timeline>
</Slide>

