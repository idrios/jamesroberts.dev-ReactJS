import React from 'react'
import Project from '../Project/Project';
import ThumbnailPng from '../../../res/images/wordfall.png';



export default class SpaceCube extends Project{
    constructor(props){
        super(props)
        this.thumbnail=ThumbnailPng
    }

    renderContentBody(){
        return (
        <>
            <h1><a href='https://play.google.com/store/apps/details?id=com.idrios.wordmash'>WordFall   <span className='project-date'>(2018)</span></a></h1>
            <h4 className='secondary-title'> 
              Spell words with letters
            </h4>
            <br/>
            <br/>
            <p>
              In 2017 I was an English teacher in China. I wanted to practice making real apps, so I made my own a version 
              of a familiar capcop game that I had immensely enjoyed as a kid. There are no ads in my version of this game, nor is there a timer. Unfortunately, none of my students liked
              this game and they all thought it was way too hard. And none of my family can play it because none of them 
              have Android phones (and I did not make a version of this for iPhone). But I enjoy playing the game myself. 
            </p>
            <br/>
            <p>
              The premise of the WordFall is very simple. You are given a set of 6 letters, and you are required to find the 
              6-letter word(s) that you can spell with those letters. TextTwist--the game's spiritual predecessor--has a timer and
              accumulates points based on how many words you find, allowing you to continue as long as you find one of the 6-letter
              words within the time limit. WordFall has no timer, but doesn't tell you that you've won unless you find all words. 
            </p>
            <br/>
            <p>
              The entire project is <a href='https://github.com/idrios/WordMash'>uploaded to my github</a>. The game was 
              written from scratch in Android Studio. It implements its own custom event messaging system. My algorithm for 
              finding all combinations of words is O(N), so restarts load very quickly. All assets were hand drawn by me
              and all sound effects were recorded by me, except for the music which is public domain and by Erik Satie. 
              The list of words in the pool is the full Scrabble dictionary (~30,000 words total), which are in plaintext 
              files saved directly into the app. It does include curse words, American & UK variants of the same word, 
              and some acronyms. This does make the game incredibly hard.    
            </p>
            <br/>
        </>
        ); 
    }
} 