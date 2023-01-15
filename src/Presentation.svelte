<script>
    import Title from './slides/Title.svelte';
    import AboutTalk from './slides/AboutTalk.svelte';
    import AboutAuthor from './slides/AboutAuthor.svelte';
    import Quiz from './slides/Quiz.svelte';
    import Timeline1991 from './slides/Timeline1991.svelte';

    export let deck;
</script>

<Title/>
<AboutTalk/>
<AboutAuthor/>
<Quiz deck={deck}/>
<Timeline1991 deck={deck}/>

