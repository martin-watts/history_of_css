<script>
  import { Row } from 'svelte-layouts';
  import Slide from '../lib/Slide.svelte';
</script>

<Slide>
  <h2 class="text-[3.7rem]">
    The push for standards begins
  </h2>
  <p>
    Todd Fahrner developed the <a href="https://www.w3.org/Style/CSS/Test/CSS1/current/test5526c.htm" rel="external">Acid 1 test</a> 
    in a bid to prompt browser makers to improve their CSS 1 support:
  </p>
  <img class="object-contain w-[33rem] m-auto" src="/assets/images/acid1_good.png" alt="The Acid 1 test for browsers - lots of red and blue and black boxes positioned in the correct places"/>
</Slide>
<Slide>
  <h2 class="text-[3.7rem]">
    It's very necessary
  </h2>
  <p>This kind of nonsense was too common:</p>
  <img class="object-contain w-[33rem] m-auto" src="/assets/images/acid1_bad.png" alt="IE5 on Win 3.11 failing the Acid 1 test"/>
</Slide>

