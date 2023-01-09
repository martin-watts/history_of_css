A History of CSS 
================

This is a presentation about the history of CSS, how it came to be a thing, what it replaced, and how it has evolved.

The content of the slides is my own work, the presentation is built using 
[svelte-slides](https://github.com/rajasegar/svelte-slides) which makes use of: 
- [Svelte](https://svelte.dev/)
- [Reveal.js](https://revealjs.com/)
- [TailwindCSS](https://tailwindcss.com) and 
- [Vite](https://vitejs.dev/)

## Getting started
You'll need [pnpm](https://pnpm.io/), which can be installed using npm: `npm install -g pnpm`

Run `pnpm install` to get all the necessary dependencies, then `pnpm dev` to start a local webserver with [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement).

To build the presentation for a production deployment run `pnpm build` which outputs to `/dist`. 

To preview the site in `/dist` run `pnpm preview`.

## How does it work?
- Each slide is both a Svelte component and Reveal.js slide.
- There can be one or more slides (using `<section/>`) within a single Svelte component.
- The slides are stored under `src/slides`...
- And are imported into the `src/Presentation.svelte` component

## Configuring Reveal.js
You can customize the `Reveal.js` setup in `src/config.js`.

## Sample slide
### src/Title.svelte
You can insert code blocks using template literals inside `<pre>` and `<code>` elements.
```html
<section>
<h1>This is a sample slide</h1>
<ul>
<li>Apples</li>
<li>Oranges</li>
<li>Grapes</li>
</ul>

<h2>Sample code</h2>

    <pre>
    <code data-line-numbers data-trim data-no-escape>
    {`
      const name = "hello world";
      if(name === 'hello') {
        console.log('world');
      }
    `}
    </code>
    </pre>
</section>
```

### src/Presentation.svelte
The slide order is the order in which you layout your Svelte components.

```html
<script>
    import Title          from './slides/Title.svelte';
    import Love           from './slides/Love.svelte';
    import GettingStarted from './slides/GettingStarted.svelte';

    const partner = ['Svelte', 'Reveal.js'];
</script>

<Title/>
<Love {partner}/>
<GettingStarted/>

```

## Built-in Components
### Slide
A component for slide with all the options supported 
```html
<Slide bgColor="red">
<h1>This is a sample slide</h1>
<ul>
<li>Apples</li>
<li>Oranges</li>
<li>Grapes</li>
</ul>
</Slide>
```

Please refer to [src/lib/Slide.svelte](src/lib/Slide.svelte) for more information about the props.


### Code
A component to render code blocks
```html
<Code trim={true} lineNumbers="1|2-4" >
    {`
      const name = "hello world";
      if(name === 'hello') {
        console.log('world');
      }
    `}
</Code>
```

Please refer to [/src/lib/Code.svelte](/src/lib/Code.svelte) for more information about the props.

### Notes
A component for speaker notes
```html
<Notes>
Hello Everyone, I am using svelte-slides for this presentation
</Notes>
```

### Youtube
A component embedding YouTube videos
```
<Youtube url="https://www.youtube.com/watch?v=1lcPGnRL4Qo"/>
```

Please refer to [/src/lib/Youtube.svelte](/src/lib/Youtube.svelte) for more information about the props.

