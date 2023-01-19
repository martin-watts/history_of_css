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
    import Timeline from './slides/Timeline.svelte';
    import Title from './slides/Title.svelte';
    import WorldWideWebBrowser from './slides/WorldWideWebBrowser.svelte';

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
      title: 'CSS3 Modules start reaching recommended status',
      date: '2012 onwards'
    }
  ];
</script>

<Title/>
<AboutTalk/>
<AboutAuthor/>
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
<NetscapeHTML/>
<BatmanForever/>
<BertBos/>

<Timeline deck={deck} timelineItems={timelineItems.slice(0,4)} />
<Timeline deck={deck} timelineItems={timelineItems.slice(0,5)}/>
