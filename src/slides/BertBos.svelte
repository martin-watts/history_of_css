<script>
  import { Row } from 'svelte-layouts';
  import Slide from '../lib/Slide.svelte';
</script>

<Slide data-transition="slide-in">
  <h2>
    Bert Bos
  </h2>
  <Row class="r-stretch text-left">
    <figure class="r-stretch">
      <img class="object-contain w-[80rem]" src="/assets/images/bert.jpg" alt="Bert Bos in 1995"/>
      <figcaption class="text-[24px]">
        Bert in 1995
      </figcaption>
    </figure>
    <div>
      <p>Bert Bos was building the <a href="https://en.wikipedia.org/wiki/Argo_(web_browser)" rel="external">Argo Browser</a> at this time.</p>
      <p>The browser used its own style sheet language called
          <a href="https://www.w3.org/People/Bos/stylesheets.html" rel="external">
            Stream-based Style Sheets
          </a>
          which he published in response to Håkon's CHSS
      </p>
    </div>
  </Row>
</Slide>

