<script>
  import Slide from '../lib/Slide.svelte'; 
</script>

<Slide>
  <h2>
    CSS v2.0
  </h2>
  <p class="text-[2rem]">
    Despite browsers still struggling to fully support CSS 1.0, <a href="https://www.w3.org/TR/2008/REC-CSS2-20080411/" rel="external">CSS 2.0</a> is published in 1998 with some big additions such as:
  </p>
  <ul class="font-mono text-[1.5rem]">
    <li class="fragment fade-up">media types and paged media (@media, @page)</li>
    <li class="fragment fade-up">aural style sheets (to support text-to-speech)</li>
    <li class="fragment fade-up">lots more font control</li>
    <li class="fragment fade-up">tables</li>
    <li class="fragment fade-up">relative, absolute and fixed positioning</li>
    <li class="fragment fade-up">overflow clipping/visibility</li>
    <li class="fragment fade-up">psuedo classes (::hover, ::focus, ::first-child)</li>
    <li class="fragment fade-up">cursors</li>
  </ul>
  <p class="fragment fade-up">It sufferred the same problem with adoption that CSS 1.0 had.</p>
</Slide>

