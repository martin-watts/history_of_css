<script>
  import Slide from '../lib/Slide.svelte'; 
</script>

<Slide>
  <h2>
    Tags to the rescue?
  </h2>
  <p class="text-[2rem]">
    HTML was designed to be purely structural, but this was at odds with authors wanting more control.
    Over the next few years a bunch of <a href="https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html" rel="external">presentational tags</a> 
    were created such as:
  </p>
  <ul class="list-none">
    <li>
      <pre class="inline-block w-28 mr-5 mt-5">
        <code data-trim class="hljs data-trim">{@html `<b>`}
        </code>
      </pre>
      <b>The boldface tag</b>
    </li>
    <li>
      <pre class="inline-block w-28 mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<i>`}
        </code>
      </pre>
      <i>The italic tag</i>
    </li>
    <li>
      <pre class="inline-block w-28 mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<u>`}
        </code>
      </pre>
      <u>The underline tag</u>
    </li>
    <li>
      <pre class="inline-block w-28 mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<s>`}
        </code>
      </pre>
      <s>The strike through tag</s>
    </li>
    <li>
      <pre class="inline-block w-auto mr-5 mt-5">
        <code data-trim class="hljs">
          {@html `<sup>`}
        </code>
      </pre>
      <sup>The superscript tag</sup>
    </li>
    <li>
      <pre class="inline-block w-auto mr-5 mt-5">
        <code data-trim class="hljs data-trim">
          {@html `<sub>`}
        </code>
      </pre>
      <sub>The subscript tag</sub>
    </li>
  </ul>
</Slide>

