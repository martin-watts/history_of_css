<script>
    import AboutAuthor from './slides/AboutAuthor.svelte';
    import AboutTalk from './slides/AboutTalk.svelte';
    import BatmanForever from './slides/BatmanForever.svelte';
    import BertBos from './slides/BertBos.svelte';
    import CHSS from './slides/CHSS.svelte';
    import HakonWiumLie from './slides/Hakon.svelte';
    import HistoryOfWWW from './slides/HistoryOfWWW.svelte';
    import MarcAndreesen from './slides/MarcAndreesen.svelte';
    import MosaicBrowser from './slides/MosaicBrowser.svelte';
    import NetscapeHTML from './slides/NHMTL.svelte';
    import Quiz from './slides/Quiz.svelte';
    import Tags from './slides/Tags.svelte';
    import Timeline1991 from './slides/Timeline1991.svelte';
    import Timeline1993 from './slides/Timeline1993.svelte';
    import Timeline1994 from './slides/Timeline1994.svelte';
    import Timeline1994_2 from './slides/Timeline1994_2.svelte';
    import Timeline1995 from './slides/Timeline1995.svelte';
    import Title from './slides/Title.svelte';
    import WorldWideWebBrowser from './slides/WorldWideWebBrowser.svelte';

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
<Timeline1994 deck={deck} />
<HakonWiumLie />
<CHSS/>
<Timeline1994_2 deck={deck} />
<NetscapeHTML/>
<BatmanForever/>
<Timeline1995 deck={deck} />
<BertBos/>

