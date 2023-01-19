<script>
  import Slide from '../lib/Slide.svelte'; 
</script>

<Slide>
  <h2>
    Netscape HTML
  </h2>
  <p class="text-[2rem]">Netscape was the first commercial web browser. It introduced lots of custom HTML tags. Some were really useful:</p>
  <ul class="list-none">
    <li>
      <pre class="inline-block align-middle w-auto mr-5 mt-5">
        <code data-trim class="hljs data-trim">{@html `<CENTER>`}
        </code>
      </pre>
      <span class="text-[2rem]">To center text in its containing element</span>
    </li>
    <li>
      <pre class="inline-block align-middle w-auto mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<FONT color="green" size="3">`}
        </code>
      </pre>
      <span class="text-[2rem]">To customise the colour and size of text</span>
    </li>
    <li>
      <pre class="inline-block align-middle w-auto mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<SPACER type="horizontal" size="10">`}
        </code>
      </pre>
      <span class="text-[2rem]">To add horizontal or vertical space (the size in pixels)</span>
    </li>
    <li>
      <pre class="inline-block align-middle w-auto mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<NOBR><WBR></WBR></NOBR>`}
        </code>
      </pre>
      <span class="text-[2rem]">To control word breaks across lines</span>
    </li>
  </ul>
</Slide>
<Slide>
  <h2>
    Netscape HTML
  </h2>
  <p class="text-[34px]">...others, less so:</p>
  <ul class="list-none">
    <li>
      <pre class="inline-block align-middle w-auto mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<BLINK>`}
        </code>
      </pre>
      <img class="inline ml-5" src="/assets/images/blink_tag.gif" alt="blinking text that says 'like this abomination'"/>
    </li>
  </ul>
</Slide>

