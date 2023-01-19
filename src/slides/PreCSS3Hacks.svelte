<script>
  import { Row } from 'svelte-layouts';
  import Slide from '../lib/Slide.svelte';
</script>

<Slide>
  <h2 class="text-[3.7rem]">
    CSS tricks from pre-CSS3 times
  </h2>
  <h3>1: Float based layouts</h3>
  <p>By the mid-late 2010s there was a big push for accessibility and table layouts are considered non-accessible.</p>
  <p>
    People want to use CSS, but <span class="font-mono">flexbox</span> and <span class="font-mono">grid</span> aren't a thing yet, the answer: <span class="font-mono">float</span>
  </p>
</Slide>
<Slide>
  <h2 class="text-[3.7rem]">
    CSS tricks from pre-CSS3 times
  </h2>
  <h3>1: Float based layouts</h3>
  <p>CSS Tricks has a <a href="https://css-tricks.com/almanac/properties/f/float/">really good float explanation</a>. <span class="font-mono">float</span>'s original intent was to take an element out of the page flow so that text could flow around it e.g.</p>
  <img class="object-contain w-[33rem] m-auto" src="/assets/images/float.png" alt="A pool float ring"/>
</Slide>
<Slide>
  <h2 class="text-[3.7rem]">
    CSS tricks from pre-CSS3 times
  </h2>
  <h3>1: Float based layouts</h3>

  <figure class="r-stretch">
    <img class="object-contain w-auto m-auto" src="/assets/images/amazon_2010.png" alt="Amazon.com as it appeared in 2010"/>
    <figcaption class="text-[24px]">
      <a href="https://web.archive.org/web/20100831150203/http://www.amazon.com/" rel="external">Amazon.com in 2010</a> courtesy of <a href="https://web.archive.org">The Wayback Machine</a>
    </figcaption>
  </figure>
</Slide>
<Slide>
  <h2 class="text-[3.7rem]">
    Some CSS tricks from pre-CSS3 times
  </h2>
  <h3>1: Float based layouts</h3>
  <figure class="r-stretch">
    <img class="object-contain w-auto m-auto" src="/assets/images/amazon_2010_highlighted.png" alt="Amazon.com as it appeared in 2010 with floating divs highlighted"/>
    <figcaption class="text-[24px]">
      <a href="https://web.archive.org/web/20100831150203/http://www.amazon.com/" rel="external">Amazon.com in 2010</a> courtesy of <a href="https://web.archive.org">The Wayback Machine</a>
    </figcaption>
  </figure>
</Slide>

<Slide>
  <h2 class="text-[3.7rem]">
    Some CSS tricks from pre-CSS3 times
  </h2>
  <h3>2: Button images and sprites</h3>
  <p>So, you really want to have rounded borders for your buttons but <span class="font-mono">border-radius</span> isn't a thing yet, then use a background image. <em>But</em> all these images will make your site slow, so put all your images in to one and use <span class="font-mono">background-position</span> + fixed <span class="font-mono">width</span> and <span class="font-mono">height</span>:
</Slide>

<Slide>
  <h2 class="text-[3.7rem]">
    Some CSS tricks from pre-CSS3 times
  </h2>
  <h3>2: Button images and sprites</h3>
  <Row>
    <figure class="r-stretch">
      <img class="object-contain w-auto m-auto" src="/assets/images/amazon_sprite.png" alt="Button sprite from Amazon.com in 2010"/>
      <figcaption class="text-[24px]">
        <a href="https://web.archive.org/web/20100831150203/http://www.amazon.com/" rel="external">From Amazon.com in 2010</a> courtesy of <a href="https://web.archive.org">The Wayback Machine</a>
      </figcaption>
    </figure>
    <figure class="r-stretch">
      <img class="object-contain w-auto m-auto" src="/assets/images/amazon_2010.png" alt="Amazon.com as it appeared in 2010"/>
      <figcaption class="text-[24px]">
        <a href="https://web.archive.org/web/20100831150203/http://www.amazon.com/" rel="external">Amazon.com in 2010</a> courtesy of <a href="https://web.archive.org">The Wayback Machine</a>
      </figcaption>
    </figure>
  </Row>
</Slide>


