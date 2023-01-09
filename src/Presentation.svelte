<script>
    import Title from './slides/Title.svelte';
    import AboutTalk from './slides/AboutTalk.svelte';
    import AboutAuthor from './slides/AboutAuthor.svelte';
    import Quiz from './slides/Quiz.svelte';

    import Transitions from './slides/examples/Transitions.svelte';

    export let deck;
</script>

<Title/>
<AboutTalk/>
<AboutAuthor/>
<Quiz deck={deck}/>
<Transitions/>

