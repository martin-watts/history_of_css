<script>
    import Title from './slides/Title.svelte';
    import AboutTalk from './slides/AboutTalk.svelte';
    import AboutAuthor from './slides/AboutAuthor.svelte';
    import Quiz from './slides/Quiz.svelte';
    import Timeline1991 from './slides/Timeline1991.svelte';
    import HistoryOfWWW from './slides/HistoryOfWWW.svelte';
    import WorldWideWebBrowser from './slides/WorldWideWebBrowser.svelte';
    import MosaicBrowser from './slides/MosaicBrowser.svelte';
    import Timeline1993 from './slides/Timeline1993.svelte';
    import MarcAndreesen from './slides/MarcAndreesen.svelte';
    import Tags from './slides/Tags.svelte';

    export let deck;
</script>

<Title/>
<AboutTalk/>
<AboutAuthor/>
<Quiz deck={deck}/>
<Timeline1991 deck={deck}/>
<HistoryOfWWW />
<WorldWideWebBrowser />
<Timeline1993 deck={deck} />
<MosaicBrowser />
<MarcAndreesen />
<Tags />

