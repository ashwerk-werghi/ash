import React from "react";
import './Firstmonth.css' 
import ziz from './images/ziz.png';

export default function Firstmonth () {
    return(
        <div>

             <h1  className="ney" > ๐ฐ๐ฐ welcome to our first month ๐ฐ๐ฐ</h1>
             <h2 className='opps'> โงโง there's only one thing to do , three words for you , I LOVE YOU โโ</h2> 
             <img src={ziz} className="op"/>
            
           
            <p className="yup">  i'll take a lead and start telling u how i felt first 
                time when i knew i have a crush on you : <br></br>
                i panicked a lot and i was afraid because you scare me
                a lot but trust me my feelings for you were stronger 
                than anything else in this world.<br/> 
                once i told you that i have a special picture that im keeping
                to myself in my phone so here it is โโ <br/>
                โ a confess : Actually this picture is so special to me when we were apart i keep looking at it
                all the night to fall asleep โโ
              </p> 
              
              

        </div>
    );
}