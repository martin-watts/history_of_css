<script>
  import { Row } from 'svelte-layouts';
  import Slide from '../lib/Slide.svelte';
</script>

<Slide data-transition="slide-in">
  <h2>
    Håkon Wium Lie
  </h2>
  <Row class="r-stretch text-left">
    <figure class="r-stretch">
      <img class="object-contain w-7xl" src="/assets/images/hakon.jpg" alt="Håkon Wium Lie in 1995"/>
      <figcaption class="text-[24px]">
        Håkon in 1995
      </figcaption>
    </figure>
    <div>
      <p>Håkon was working with Tim Berners-Lee at CERN in 1994.</p>
      <p>He has a masters in Visual Studies and had previously worked at the MIT media lab.</p>
      <p>
        With some prompting from Tim and <a href="https://en.wikipedia.org/wiki/Dave_Raggett" rel="external">Dave Raggett</a>,
        Håkon published his proposal for 
          <a href="https://www.w3.org/People/howcome/p/cascade.html" rel="external">
            Cascading HTML Style Sheets
          </a>
      </p>
    </div>
  </Row>
</Slide>

