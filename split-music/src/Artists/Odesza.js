import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './Odesza.css'

class Odesza extends Component {
  render() {
    return (
        <div className='odesza-card'>
        <div className='container'>
        <div><h1 className='odesza-name'> Odesza</h1></div>
        <div><img className='odesza-photo' src="https://i.imgur.com/CU4hVbb.jpg" ></img></div>
        </div>
        <p className='odesza-description'> In 2012, a striking new voice emerged from the wider 
        surge of electronic music in the U.S.ODESZA’s Summer’s Gone stood out from the crowd; it 
        was a collection of songs, not just beats; and its irresistible, startling dreaminess, 
        addictive drums and fathoms-deep bass set it apart from the by-the-numbers brutality of 
        EDM’s also-rans. In an age of manufactured internet buzz and carefully plotted hype, ODESZA’s 
        story was refreshingly authentic: A brilliant new duo unveiled their music on the internet, 
        and the world paid attention. <br/><br/>Harrison Mills (aka CatacombKid) and Clayton Knight 
        (aka BeachesBeaches) began recording together after meeting at Western Washington University. 
        There was instant chemistry, and the pair worked prolifically, quickly carving out a distinctive, 
        heady sound: glitched-out vocals, soaring, visceral melody and ear-gripping drums. Two songs 
        from Summer’s Gone – “How Did I Get Here” and “iPlayYouListen” – instantly leapt to #1 on the 
        Hype Machine Popular Chart. ODESZA began to make evangelical fans, with word of their music 
        setting the world – both real and virtual – alight.<br/><br/>2013 saw the release of the My 
        Friends Never Die EP, with three of the five tracks hitting #1 on Hype Machine. Relentless 
        touring followed, including dates with Emancipator and numerous festival performances including 
        Sasquatch Music Festival and Lightning In A Bottle. Thrown in at the deep end, ODESZA quickly 
        honed a live craft to match that of their recordings.<br/><br/>The duo was playing to larger 
        and larger crowds when Pretty Lights asked them to be the support act on his fall tour, and 
        to remix “One Day They’ll Know,” which also hit #1 on Hype Machine and #8 on the iTunes 
        Electronic Chart. Later in 2013, ODESZA selected their favorite producers for a follow up remix 
        EP, My Friends Never Die Remixes, and launched the ambitious, ongoing mixtape and eventual 
        party series NO.SLEEP.<br/><br/>February 2014 brought the release of the ODESZA single “Sun Models 
        (feat. Madelyn Grant)”, taken from the duo’s forthcoming second album. This song continued the 
        trend they’d set previously, and it too hit #1 on Hype Machine. In March 2014 ODESZA’s remix of 
        Pretty Lights’ “Lost And Found” was released on the DIVERGENT movie soundtrack, and (you 
        guessed it!) hit #1 on Hype Machine.<br/><br/>Harrison and Clayton headed back into the studio, 
        putting the finishes touches to their forthcoming second album, before setting out on a sold out 
        North American tour in Spring 2014, culminating in a performance at Coachella. Not wanting to 
        leave their growing legion of fans wanting, the duo’s remix of ZHU’s hit “Faded” was released, 
        taking their #1s on the Hype Machine chart straight into double figures.Summer 2014 saw ODESZA 
        visit Australia to play a series of live dates, before heading back to North America for festivals, 
        and to polish up and master their now hotly anticipated sophomore album.<br/><br/>Released September
        9th 2014, In Return has more than just delivered on the promise of ODESZA’s previous work. A record 
        with a precocious maturity and coherence, it’s a start-to-finish stunner of pop-infused, electronic 
        wonder, littered with infectious hooks and potent atmosphere. Vocal performances from Zyra, Py and 
        Shy Girls accompany that of Madelyn Grant on “Sun Models,” expertly worked into ODESZA’s trademark, 
        mood-altering uplift.ODESZA developed a new live performance to accompany In Return, ensuring that 
        the shows do full justice to the album. Their work ethic and constant evolution has resulted in sold 
        out headline tours of North America last fall, Australia this winter and North America again this 
        spring with every show selling out in advance in the biggest venues they’ve headlined to date. Never 
        ones to settle,ODESZA’s ambitious live production continues to expand in time for performances at 
        every major music festival this summer including Coachella, Bonnaroo, Lollapalooza, Hangout, Sasquatch, 
        Governors Ball, Firefly, Melt and more.<br/><br/>One of the stunning aspects of ODESZA is the speed 
        with which they’ve created a large, devoted fanbase – testament to just how refreshing, immediate 
        and exciting their music is. To date, ODESZAhas earned 21 Hype Machine #1s, amassed over 66 million 
        SoundCloud streams, over 29 million Spotify plays in the last 90 days, over 34.5 million Pandora plays 
        in the last 30 days, been licensed by Adidas, Target, GoPro, Royal Caribbean, The North Face, Piz Buin 
        and many more, and collaborated with powerhouses such as Buzzfeed and Tumblr. In Return debuted at #1 
        on the Billboard Electronic chart with 13 weeks in the Top 10, #42 on the Billboard Top 200 chart, # 1 
        on the iTunes Electronic Chart where it spent 15 days in a row, cracked the iTunes Electronic Chart 
        Top 10 in 7 other countries outside the U.S., and reached #20 on the iTunes Overall Albums chart. Their 
        breakout single, “Say My Name (feat. Zyra),” reached #1 on the Hype Machine popular chart twice, #1 on 
        the Spotify US Viral Chart, #2 on the Spotify Global Chart, was named iTunes Single of the Week in many 
        countries around the globe, and is currently the #1 most played song on 8Tracks. The “Say My Name” 
        video was named a Vimeo staff pick and saw airplay on MTV Hits, MTVU and Fuse. ODESZA has also been 
        commissioned to make remixes for Sia, Charli XCX, RAC, Angus & Julia Stone, Slow Magic, Ki:Theory and 
        many more to come. The sky is the limit for these young turks.</p>
        <div>
        <div className='odesza-tracks'>
        <ReactPlayer className='odesza-player' url='https://soundcloud.com/odesza/loyal' />
        </div>
        <div className='suggested-artists'>
        <h2 className='suggested-artists'>If you like Odesza, check out these artists</h2>
      
        </div>
        </div>
        </div>

       
    )
  }
}

export default Odesza;
