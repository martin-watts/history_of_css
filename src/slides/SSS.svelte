<script>
  import Slide from '../lib/Slide.svelte'; 
</script>

<Slide>
  <h2>Stream-based Style Sheets</h2>
  <p class="text-left text-[2rem]">It's pretty similar syntax-wise to CHSS and introduces key concepts such as inheritance:</p>
  <blockquote class="w-full text-[20px]">
    ...if a property is given as `*FOO.justify: !ALIGN' and attribute ALIGN of FOO has the value `left', then all sub-elements of FOO are left aligned, it doesn't matter if they have an ALIGN attribute of their own
  </blockquote>
  <p class="text-left text-[2rem]">And addressing:</p>
  <pre>
    <code class="hljs text-[20px] mt-0 mb-0" data-trim>
      {`! <OL> has numbered items <LI>: 1.A.I, bullets elsewhere
        !
        *LI.prebreak: 0.5
        *LI.postbreak: 0.5
        *OL.LI.label: 1
        *OL*OL.LI.label: A
        *OL*OL*OL.LI.label: I
        *LI.label: bullet`}
    </code>
  </pre>
  <p class="text-left text-[2rem]">It is also markup language agnostic.</p>
</Slide>

