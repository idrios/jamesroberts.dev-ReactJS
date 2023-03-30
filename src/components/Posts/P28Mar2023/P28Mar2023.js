import React from 'react'
import Post from '../Post/Post';

import './P28Mar2023.css';


export default class P28Mar2023 extends Post{
    constructor(props){
        super(props)
    }

    renderContentBody(){
        return (
        <div>
            <h1>Remaking my Android applications for my website</h1>
            <h4 className='post-date'>March 28, 2023</h4>
            <br/>
            <p>
              Lately I've been renovating my website, most recently adding links to some projects I'd 
              previously done like WordFall & SpaceCube for Android. While I've also been very deliberate to
              avoid importing 3rd party scripts or assets, I noticed that if I follow my own links to these
              app's pages, and then return to my own site, my browser will attempt to run maybe dozens of 
              scripts on <em>my page</em> that I had nothing to do with! 
            </p>
            <p>
              I hadn't realized until now that this was how tracking scripts functioned. I didn't 
              know that a cookie could just run on just any webpage. I was furious and ready to go to war 
              with cookies. 
            </p>
            <p className='remark'>
              The cookies won.
            </p>
            <p>
              First I tried deleting the tracking cookies. The user certainly doesn't want to be tracked, so I'd 
              be doing them a favor. However, I learned that it's impossible to delete other sites' cookies, because
              doing so would let any site log a person out of their gmail, bank account, etc. So this approach failed
              for good reasons.
            </p>
            <p>
              Then I tried to refuse to load the cookies. I started reading about tricks like putting my whole 
              website into an <code>iframe</code> or doing things with proxies. I didn't fully understand any of 
              these approaches and they seemed like overkill. My head was spinning, until I finally had a new idea.
            </p>
            <br/>
            <h2>
              Coming soon: WordFall and SpaceCube in your browser. 
            </h2>
            <p>
              I realized it would be easier and more rewarding to simply remake my Android apps and put them on
              my website. I may have given up on blocking the tracking cookies, but I can still deny page views
              to the offending websites!
            </p>
            <p>
              SpaceCube is an OpenGLES 2.0 cube renderer that spins on 2 axes, responds to touch inputs, and 
              lacks z-buffering. It's been likened to a fidget spinner. Look forward to it, with all the 
              uselessness that made the original so popular! 
            </p>
            <p>
              WordFall for Android was so successful that as of writing this, there are <em>6</em> other users
              around the world who have it downloaded on their phones. Could you be #7? Be ready to try it!
            </p>
            <p className='remark'>
              DuckDuckGo, if you're reading this, please teach me how you block cookies. 
            </p>
        </div>
        ); 
    }
} 