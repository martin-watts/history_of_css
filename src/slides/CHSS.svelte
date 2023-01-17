<script>
  import Slide from '../lib/Slide.svelte'; 
</script>

<Slide>
  <h2>Cascading HTML Style Sheets</h2>
  <p class="text-left">It's not the first proposal for styles on the web, but it has a uniquely compelling feature - The Cascade:</p>

  <pre>
    <code class="hljs" data-trim>
      {`
        /* user style sheet */
        h1.font.size = 24pt 60%`
      }
    </code>
  </pre>

  <pre>
    <code class="hljs" data-trim>
      {`
        /* author style sheet */
        h1.font.size = 20pt 40%`
      }
    </code>
  </pre>

  <p class="text-left">Also thoughts about responsive styles:</p>

  <pre class="w-[61.5rem]">
    <code class="hljs" data-trim>
      {`
        AGE > 3d ? background.color = pale_yellow : background.color = white
        DISPLAY_HEIGHT > 30cm ? http://NYT.com/style : http://LeMonde.fr/style
      `}
    </code>
  </pre>
</Slide>

