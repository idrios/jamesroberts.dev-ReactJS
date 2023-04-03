import React from 'react'
import Project from '../Project/Project'
import ThumbnailPng from '../../../res/images/naia.png'
import ParallaxGif from '../../../res/images/naia-rpg-parallax.gif'
import PixipupGif from '../../../res/images/naia-rpg-pixipup.gif'
import BattleGif from '../../../res/images/naia-rpg-battle.gif'

import './NaiaSoftworks.css'



export default class NaiaSoftworks extends Project{
    constructor(props){
        super(props)
        this.thumbnail=ThumbnailPng
        this.title="Naia Softworks"
        this.date="2014-present"
        this.secondaryTitle=""
    }

    renderContentBody(){
        return (
        <>
          <p>
            Starting as your average videogame concept in 2014 about a war between men and gods, the world of Naia has 
            evolved over the years to have a rich lore with layers of conflict between nations, individuals, 
            and nature. 
          </p>
          <br/>
          <p>
            I've had a lot of fun describing biological phenomena in Naia that doesn't exist on Earth, 
            but credit for the boundless volumes of lore, including a completed (though yet unpublished) 300-page 
            novel, goes to my friend Tim Filla. Credit for the map in the thumbnail also goes to Tim. 
          </p>
          <br/>
          <p>
            What I've immensely enjoyed thus far is experimenting with videogame development. While learning 
            RPGMaker MV I learned how to write plugins, and tried my hand at adding things like: 
          </p>
          <ul><li>Parallax</li></ul>
          <img className='autoscale' src={ParallaxGif}/>
          <ul><li>Custom PixiJS filters</li></ul>
          <img className='autoscale' src={PixipupGif}/>
          <ul><li>A custom type of scene as precursor to a grid-based battle system</li></ul>
          <img className='autoscale' src={BattleGif}/>
          <p className='remark'>Backlog item #403: make the art consistent</p>
          <br/>
          <p>
            The lore continues to evolve and our progress towards a playable game continues to advance. The 
            current state of this ongoing project is that we're working on a smaller game with a lighter scope,
            which takes place elsewhere in the fantasy world. We've already built a moderate amount of tooling 
            around the new game but it's still in very early stages. 
          </p>
          <br/>
        </>
        ); 
    }
} 