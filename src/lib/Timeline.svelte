<style>
  div {
    overflow-x: clip;
  }

  ol {
    display: flex !important;
    list-style: none !important;
  }

  ol::before {
    background-color: var(--timeline-color, white);
    content: ' ';
    display: block;
    height: var(--timeline-height, 2px);
    left: 0;
    position: absolute;
    right: 0;
    top: 10px;
  }
</style>

<script>
  let  { children } = $props();
</script>

<div>
  <ol>
    {@render children?.()}
  </ol>
</div>

