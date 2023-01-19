<script>
  import Slide from '../lib/Slide.svelte';
  import Timeline from '../lib/Timeline.svelte';
  import TimelineItem from '../lib/TimelineItem.svelte';

  export let deck;
  export let timelineItems = [];
  export let delayIn = true

  let restartAnimationLast;
  let restartAnimationNext;
  let transitionStart = false;

  const timelineItemWidth = 27;
  const secondSlideId = (Math.random() + 1).toString(36).substring(7);

  $: {
    if (deck) {
      deck.on('slidechanged', event => {
        if (event.currentSlide.dataset.id === secondSlideId) {
          transitionStart = true;
          restartAnimationLast && restartAnimationLast();
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
    {#each timelineItems as item, i}
      {#if i < timelineItems.length}
        <TimelineItem
          title={item.title}
          date={item.date}
          beforeLine
          afterLine={i < timelineItems.length - 2}
          --margin-left={i === 0 && timelineItems.length > 2 ? `-${(timelineItems.length - 3) * timelineItemWidth}rem` : 0}
          --opacity={i < timelineItems.length - 1 ? 100 : 0}
        />
      {/if}
    {/each}
  </Timeline>
</Slide>
<Slide data-transition="none" data-id={secondSlideId}>
  <Timeline>
    {#if timelineItems.length > 0 }
      {#each timelineItems as item, i}
        {#if i < timelineItems.length - 2}
          <TimelineItem
            title={item.title}
            date={item.date}
            beforeLine
            afterLine
            --margin-left={i === 0 && timelineItems.length > 2 ? `-${(timelineItems.length - (transitionStart ? 2 : 3)) * timelineItemWidth}rem` : 0}
          />
        {/if}
      {/each}
      {#if timelineItems.length > 1}
        <TimelineItem
          title={timelineItems[timelineItems.length - 2].title}
          date={timelineItems[timelineItems.length - 2].date}
          beforeLine
          afterLine
          animateOut
          bind:restartAnimation={restartAnimationLast}
        />
      {/if}
      <TimelineItem
        title={timelineItems[timelineItems.length - 1].title}
        date={timelineItems[timelineItems.length - 1].date}
        beforeLine
        animateIn
        bind:restartAnimation={restartAnimationNext}
        --opacity={transitionStart ? 100 : 0}
        delayIn={delayIn}
      />
    {/if}
  </Timeline>
</Slide>

