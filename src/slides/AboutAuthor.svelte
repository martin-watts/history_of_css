<script>
  import { formatDistanceToNowStrict } from 'date-fns';
  import { Row } from 'svelte-layouts';
  import Slide from '../lib/Slide.svelte';

  const devYears = formatDistanceToNowStrict(new Date('2002-09-01'));
  const proDevYears = formatDistanceToNowStrict(new Date('2007-10-01'));
</script>

<Slide data-transition="slide-in">
  <h2>
    About me:
  </h2>
  <Row class="r-stretch">
    <figure class="r-stretch">
      <img class="object-contain w-[80rem]" src="/assets/images/old_me.webp" alt="Martin looking very old"/>
      <figcaption class="text-[24px] text-left">
        ^ Me when I think about how long I've been doing this.
      </figcaption>
    </figure>
    <ul class="pl-5 self-center">
      <li class="fragment fade-up mb-5">I have been writing software for {devYears}.</li>
      <li class="fragment fade-up mb-5">People have been paying me to do it for {proDevYears}.</li>
      <li class="fragment fade-up mb-5">I currently work at Mayden.</li>
      <li class="fragment fade-up">
        I am <em>not</em> a CSS expert, but I do know where the <a href="https://developer.mozilla.org/en-US/" rel="external">Mozilla Developer Network</a> 
        and <a href="https://css-tricks.com/" rel="external">CSS Tricks</a> live.
      </li>
    </ul>
  </Row>
</Slide>
<Slide data-transition="none">
  <h2 class="-mt-5">
    More about me:
  </h2>
  <ul>
    <li class="fragment fade-up mb-5">My first PC looked like this: <img class="h-96 my-5 mx-auto" src="/assets/images/amstrad_pc_1512.webp" alt="Amstrad PC 1512 - a computer from the 1980s"/></li>
    <li class="fragment fade-up mb-5">Basically, I've seen stuff.</li>
  </ul>
</Slide>
<Slide data-transition="none">
  <p class="r-fit-text">
    On to the talk...
  </p>
</Slide>
