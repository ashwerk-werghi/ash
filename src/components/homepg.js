import React from "react";
import './homepg.css'
import CArousel from './Carousel';


export default function Home (){
    return(
        <div className="hi">
            <div>
          <h1 className="ktiba"> ⁂ hey darling ⁂ </h1>

          <p className="down"> so before you start clicking on the dropdown "≣" <br></br> here is the thing : <br></br>
          every month has its page and every page has its story <br></br>
          ♥♥  i hope they will please you ♥♥
                </p> 
               <CArousel/>
           <p className="forever"> So are you ready to  get back in time a little bit ? <br></br>
             then try " click me " to reveal what is hidden ➹➹ 
               </p>    
            </div> 
      </div>
    );
}