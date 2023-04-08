import React from 'react'
import Project from '../Project/Project'
import ThumbnailPng from '../../../res/images/slimecontrol.png'
import SCPromo1 from '../../../res/images/slimecontrol-promo1.png'
import SCPromo2 from '../../../res/images/slimecontrol-promo2.png'

import './SlimeControl.css'



export default class SlimeControl extends Project{
    constructor(props){
        super(props)
        this.thumbnail=ThumbnailPng
        this.title=<a href="https://donjuanjavier.itch.io/slime-control">Slime Control</a>
        this.date="2023"
        this.secondaryTitle=<span>Rated best <a href="https://itch.io/jam/metroidvania-month-19">Metroidvania Month 19</a> gamejam submission, if you <a href="https://itch.io/jam/metroidvania-month-19/rate/1970976">disregard 40 other submissions"</a></span>
    }

    renderContentBody(){
        return (
        <>
          <p>
            My friend <a href="https://www.youtube.com/@jackstratus1323">Mitch</a> invited me to join Metroidvania Month 19 
            with a number of other devs and artists. We had 1 month to build a metroidvania-styled game under the theme of
            "you are the monster". The premise of our game, Slime Control, is that you are a slime-creature trying to break
            out of a lab. While your character may be weak, you can greatly bolster your capabilities by possessing myriad 
            foes.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href={SCPromo1}><img src={SCPromo1} className="autoscale"/></a>
                </td>
                <td>
                  <a href={SCPromo2}><img src={SCPromo2} className="autoscale"/></a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Credits go to:
          </p>
          <table>
            <tbody>
              <tr><th>Art</th></tr>
              <tr>
                <td>ChampionNBloom</td>
                <td><a href="https://championnbloom.itch.io/">itch</a></td>
              </tr>
              <tr>
                <td>kodo</td>
                <td></td>
              </tr>
              <tr>
                <td>jaegerpilotmax</td>
                <td><a href="https://www.instagram.com/jaegerpilotmax/">insta</a></td>
              </tr>
              <tr><th>Level Design</th></tr>
              <tr>
                <td>idrios (myself)</td>
                <td><a href="https://jamesroberts.dev">website</a></td>
              </tr>
              <tr><th>Programming</th></tr>
              <tr>
                <td>donjuanjavier</td>
                <td><a href="https://donjuanjavier.itch.io/">itch</a></td>
              </tr>
              <tr>
                <td>Jack Stratus</td>
                <td><a href="https://itch.io/profile/jack-stratus">itch</a></td>
              </tr>
              <tr>
                <td>Keith (Beat Quest Games)</td>
                <td><a href="https://beatquestgames.itch.io/">itch</a></td>
              </tr>
              <tr><th>Music</th></tr>
              <tr>
                <td>donjuanjavier</td>
                <td><a href="https://donjuanjavier.itch.io/">itch</a></td>
              </tr>
            </tbody>
          </table>
          <p>
            Credit for the thumbnail also goes to kodo. 
          </p>
          <p>
            It was a blast doing the gamejam with these people and they were all incredibly talented. 
            I would gladly do more projects with them in the future. 
          </p>
          <br/>
          <p>
            <a href="https://donjuanjavier.itch.io/slime-control">Check out the game here</a>. 
          </p>
        </>
        ); 
    }
} 