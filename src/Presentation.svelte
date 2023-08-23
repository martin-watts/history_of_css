<script>
    import AboutAuthor from './slides/AboutAuthor.svelte';
    import AboutTalk from './slides/AboutTalk.svelte';
    import AboutTalk2 from './slides/AboutTalk2.svelte';
    import Acid1 from './slides/Acid1.svelte';
    import BatmanForever from './slides/BatmanForever.svelte';
    import BertBos from './slides/BertBos.svelte';
    import CHSS from './slides/CHSS.svelte';
    import CSS1 from './slides/CSS1.svelte';
    import CSS2 from './slides/CSS2.svelte';
    import CSS3 from './slides/CSS3.svelte';
    import Finale from './slides/Finale.svelte';
    import HakonWiumLie from './slides/Hakon.svelte';
    import HistoryOfWWW from './slides/HistoryOfWWW.svelte';
    import InternetExplorer3 from './slides/ie3.svelte';
    import MarcAndreesen from './slides/MarcAndreesen.svelte';
    import MosaicBrowser from './slides/MosaicBrowser.svelte';
    import NetscapeHTML from './slides/NHMTL.svelte';
    import PreCSS3Hacks from './slides/PreCSS3Hacks.svelte';
    import Quiz from './slides/Quiz.svelte';
    import SSS from './slides/SSS.svelte';
    import Tables from './slides/Tables.svelte';
    import Tags from './slides/Tags.svelte';
    import Timeline from './slides/Timeline.svelte';
    import Title from './slides/Title.svelte';
    import WorldWideWebBrowser from './slides/WorldWideWebBrowser.svelte';
    import WWW3 from './slides/WWW3.svelte';

    export let deck;

    const timelineItems = [{
      title: 'WWW Released',
      date: '6th August 1991'
    }, {
      title: 'NCSA Mosaic',
      date: '23rd April 1993'
    }, {
      title: 'CHSS Proposal',
      date: '10th October 1994'
    }, {
      title: 'Netscape Navigator 1.0',
      date: '13th October 1994'
    }, {
      title: 'Netscape Navigator 1.1',
      date: '6th March 1995'
    }, {
      title: 'Third World Wide Web Conference',
      date: '10th April 1995'
    }, {
      title: 'Internet Explorer 3',
      date: '13th August 1996'
    }, {
      title: 'CSS v1.0',
      date: '17th December 1996'
    }, {
      title: 'Netscape Navigator 4',
      date: '11th June 1997'
    }, {
      title: 'CSS v2.0',
      date: '12th May 1998'
    }, {
      title: 'Acid1 Test',
      date: '26th January 1999'
    }, {
      title: 'Internet Explorer 5',
      date: '18th March 1999'
    }, 
    //todo: broken ie5 box model
    {
      title: 'Internet Explorer 6',
      date: '24th August 2001'
    }, {
      title: 'Firefox 1.0',
      date: '9th November 2004'
    }, {
      title: 'CSS 2.1',
      date: '12th April 2011'
    }, {
      title: 'CSS 3 Modules start reaching recommended status',
      date: '2012 onwards'
    }
  ];
</script>

<Title />
<AboutTalk />
<AboutAuthor />
<AboutTalk2 />
<Quiz deck={deck}/>
<Timeline deck={deck} timelineItems={timelineItems.slice(0,1)} delayIn={false}/>
<HistoryOfWWW />
<WorldWideWebBrowser />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,2)} />
<MosaicBrowser />
<MarcAndreesen />
<Tags />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,3)} />
<HakonWiumLie />
<CHSS/>
<BertBos/>
<SSS />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,4)} />
<NetscapeHTML />
<BatmanForever />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,5)}/>
<Tables />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,6)}/>
<WWW3 />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,7)} />
<InternetExplorer3 />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,8)}/>
<CSS1 />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,9)}/>
<Timeline deck={deck} timelineItems={timelineItems.slice(0,10)}/>
<CSS2 />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,11)}/>
<Acid1 />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,12)}/>
<!-- IE5 broken box model here -->
<Timeline deck={deck} timelineItems={timelineItems.slice(0,13)}/>
<Timeline deck={deck} timelineItems={timelineItems.slice(0,14)}/>
<PreCSS3Hacks />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,15)}/>
<Timeline deck={deck} timelineItems={timelineItems.slice(0,16)}/>
<CSS3 />
<Finale />
