<style>
  li {
    position: relative;
    text-align: center;
    width: var(--width, 27rem);
    opacity: var(--opacity, 1);
    margin-left: var(--margin-left, 0);
    transition-property: margin-left, opacity;
    transition-duration: 2.5s, 0.5s;
    transition-timing-function: ease-in;
    flex-shrink: 0;
  }

  div {
    margin-right: var(--margin-right, 3rem);
    opacity: var(--opacity, 100);
    transition: all;
    transition-duration: 1.5s;
    transition-delay: 1.75s;
  }

  h3 {
    color: var(--title-color, var(--pacificBlue)) !important;
  }

  svg {
    height: var(--icon-height, 2.5rem);
    margin-top: var(--icon-margin-top, -0.5rem);
    z-index: 10;
    width: 100%;
    margin-right: -var(--margin-right, 3rem);
  }

  circle {
    fill: var(--icon-color, var(--oliveDrab3));
    stroke: var(--icon-stroke-color, white);
    stroke-width: var(--icon-stroke-width, 5px);
  }

  line {
    stroke: var(--line-stroke-color, var(--oliveDrab3));
    stroke-width: var(--line-stroke-width, 5px);
  }
</style>

<script>
  let svgElement = $state();

  let { 
    title,
    date,
    icon,
    iconX = 'calc(50% - 1.5rem)',
    iconY = 20,
    iconSize = 15,
    animateIn = false,
    delayIn = true,
    animateOut = false,
    beforeLine = false,
    afterLine = false,
    restartAnimation = $bindable()
  } = $props();

  restartAnimation = () => {
      if (!svgElement) {
        return;
      }

      const animations = svgElement.querySelectorAll('animate');

      animations.forEach(animation => {
        const delay = animation.getAttribute('begin');

        if (delay) {
          animation.parentElement.style.display='none';
          const removeDisplayNone = () => animation.parentElement.style.display = '';

          animation.addEventListener('beginEvent', removeDisplayNone, { once: true })
          animation.beginElementAt(delay.replace('s', ''));
        } else {
          animation.beginElement();
        }
      });
  }
</script>


<li>
  {#if icon}
    {@render icon()}
  {:else}
    <svg bind:this={svgElement}>
      {#if beforeLine}
        <line x1="0%" y1={iconY} x2={animateIn ? null : '48%'} y2={iconY}>
          {#if animateIn}
            <animate
              attributeName="x2"
              from="0%"
              to="48%"
              begin={delayIn ? '0.75s' : null}
              dur="0.75s"
              fill="freeze"
            />
          {/if}
        </line>
      {/if}
      {#if afterLine}
        <line x1="48%" y1={iconY} x2={animateOut ? null : '100%'} y2={iconY}>
          {#if animateOut}
            <animate
              attributeName="x2"
              from="48%"
              to="100%"
              dur="0.75s"
              fill="freeze"
            />
          {/if}
        </line>
      {/if}
      <circle cx={iconX} cy={iconY} r={iconSize}>
        {#if animateIn}
          <animate
            attributeName="r"
            from="0"
            to={iconSize}
            dur="0.25s"
            begin={delayIn ? '1.5s' : '0.75s'}
            fill="freeze"
          />
        {/if}
      </circle>
    </svg>
  {/if}
  <div style={!delayIn && 'transition-delay: 1.25s'}>
    {#if title}
      <h3>
        {title}
      </h3>
    {/if}
    {#if date}
      <p>
        {date}
      </p>
    {/if}
  </div>
</li>

