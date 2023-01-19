<script>
  import Slide from '../lib/Slide.svelte'; 
</script>

<Slide>
  <h2>
    CSS v1.0
  </h2>
  <p class="text-[2rem]">
    A couple of short years, and much wrangling later, <a href="https://www.w3.org/TR/CSS1/" rel="external">CSS v1.0</a> is published. The syntax has changed to be the one we use today i.e.
  </p>
  <div class="text-[2rem] w-auto font-mono mr-5 mt-5">
    <span class="text-color-olive">selector </span>{'{'}
      <span class="text-color-pacific-blue">property</span>:<span class="text-color-flame">value</span>; ...
    {'}'}
  </div>
  <p class="text-[2rem]">It contains properties for:</p>
  <ul class="font-mono text-[1.5rem]">
    <li class="fragment fade-up">fonts (e.g. style, variant, weight etc.)</li>
    <li class="fragment fade-up">color</li>
    <li class="fragment fade-up">backgrounds (e.g. color, image, repeat, position)</li>
    <li class="fragment fade-up">spacing (e.g. letter, word)</li>
    <li class="fragment fade-up">text (e.g. decoration, align, indent)</li>
    <li class="fragment fade-up">margin, padding and borders</li>
    <li class="fragment fade-up">width and height</li>
    <li class="fragment fade-up">list styles</li>
    <li class="fragment fade-up">display (block, inline and list-item)</li>
    <li class="fragment fade-up">float and clear</li>
  </ul>
</Slide>

