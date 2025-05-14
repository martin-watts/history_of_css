<script>
  import { Row } from 'svelte-layouts';
  import Slide from '../lib/Slide.svelte';
</script>

<Slide>
  <h2 class="text-[3.7rem]">
    Tables - the original grid system
  </h2>
  <p>Netscape v1.1 added support for the - at the time - not yet standardised <code>{`<table>`}</code> tag. It didn't take long for people to realise that tables could be used to position things other than just tabular data.</p>
  <p>N.B. At this point in 1995 it was two years away from the Web Accessibility Initiative (WAI) being formed, and four years until the Web Content Accessibility Guidelines (WCAG) v1.0 are published.
  </p>
</Slide>
<Slide>
  <h2 class="text-[3.7rem]">
    Tables - the original grid system
  </h2>
  <figure class="r-stretch">
    <img class="object-contain w-132 m-auto" src="/assets/images/adobe_1996.png" alt="Adobe.com as it appeared in 1996"/>
    <figcaption class="text-[24px]">
      <a href="https://web.archive.org/web/19961228111753/http://www2.adobe.com/" rel="external">Adobe.com in 1996</a> courtesy of <a href="https://web.archive.org">The Wayback Machine</a>
    </figcaption>
  </figure>
</Slide>
<Slide data-auto-animate>
  <h2 class="text-[3.7rem]">
    Tables - the original grid system
  </h2>
  <figure class="r-stretch">
    <img class="object-contain w-132 m-auto" src="/assets/images/adobe_1996_highlight.png" alt="Adobe.com as it appeared in 1996 with tables/table cells outlined - there are lots of tables here"/>
    <figcaption class="text-[24px]">
      <a href="https://web.archive.org/web/19961228111753/http://www2.adobe.com/" rel="external">Adobe.com in 1996 - with tables highlighted</a> courtesy of <a href="https://web.archive.org">The Wayback Machine</a>
    </figcaption>
  </figure>
</Slide>
<Slide data-auto-animate>
  <h2 class="text-[3.7rem]">
    Tables - the original grid system
  </h2>
  <Row class="r-stretch">
    <figure class="r-stretch">
      <img class="object-contain w-132 m-auto" src="/assets/images/adobe_1996_highlight.png" alt="Adobe.com as it appeared in 1996 with tables/table cells outlined - there are lots of tables here"/>
      <figcaption class="text-[24px]">
        <a href="https://web.archive.org/web/19961228111753/http://www2.adobe.com/" rel="external">Adobe.com in 1996 - with tables highlighted</a> courtesy of <a href="https://web.archive.org">The Wayback Machine</a>
      </figcaption>
    </figure>
    <div class="text-[2rem] text-left pl-5">
      <p>There's no CSS in use on this page, so how come the links are red?</p>
      <div class="fragment fade-up">
        <p>You guessed it, HTML:</p>
        <pre class="mr-5 mt-5 ml-0 w-auto">
          <code data-trim class="hljs data-trim">
            {`<body vlink="#52188C" link="#ff0000" bgcolor="#ffffff">
              ...
            </body>`}
          </code>
        </pre>
      </div>
    </div>
  </Row>
</Slide>



