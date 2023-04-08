import React from 'react'
import Project from '../Project/Project'
import ThumbnailPng from '../../../res/images/wordfall.png'
import DemoGif from '../../../res/images/wordfall-demo.gif'

import './WordFall.css'



export default class SpaceCube extends Project{
    constructor(props){
        super(props)
        this.thumbnail=ThumbnailPng
        this.title=<a href="https://play.google.com/store/apps/details?id=com.idrios.wordmash">WordFall</a>
        this.date="2018"
        this.secondaryTitle="An actual word game (Android-only)"
    }

    renderContentBody(){
        return (
        <>
            <p>
              From 2017-2018 I was an English teacher in China. I wanted to make word games for my students, so I made 
              my own version of a familiar PopCap game that I had immensely enjoyed as a kid.
            </p>
            <br/>
            <p>
              The premise of WordFall is very simple. You are given a set of 6 random letters that, in the right
              combination, spell an English 6-letter word. If you can find all valid 3-, 4-, 5-, and 6-letter words that
              can be spelled with your six letters, you win! There is no timer. 
            </p>
            <br/>
            <img src={DemoGif} className='wordfall-android'/>
            <br/>
            <p>
              The entire project is <a href='https://github.com/idrios/WordMash'>uploaded to my github</a>. The game was 
              written from scratch in Android Studio. It implements its own custom event messaging system. My algorithm for 
              finding all combinations of words is O(N), so restarts load very quickly. All assets were hand drawn by me
              and all sound effects were recorded by me, except for the music which is by Erik Satie and is public domain. 
              The list of words in the pool is the full Scrabble dictionary for 3 to 6-letter words (~30,000 words total), 
              which are in plaintext files saved directly into the app. It does include curse words, American & UK 
              variants of the same word, and some acronyms. This does make the game incredibly hard.
            </p>
            <br/>
        </>
        ); 
    }
} 