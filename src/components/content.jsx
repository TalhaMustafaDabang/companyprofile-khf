import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/content.css';
import Background1 from "../background1.jpg";
import Background2 from "../background2.jpg";
import Background3 from "../background3.jpg";

export default class Content extends Component{
    state={};


    render(){

    
        let styleSec1={
            backgroundImage: `url(${Background1})`
        }
        let styleSec2={
            backgroundImage: `url(${Background2})`
        }
        let styleSec3={
            backgroundImage: `url(${Background3})`
        }

        return (
            <div>
            <section  style={styleSec1} className="sec1"></section>
            <section id="aboutUs" className="sec4">
             <div className="aboutUsContent">
             
           <h3 className="aboutUs">
               
Here at ModCloth, we reimagine timeless aesthetics for a modern era,<br/> creating original prints and designing unique pieces that are accessible to all.

But our passion goes beyond great clothes. Since day one,<br/> we’ve championed values of female empowerment and inclusivity. We’re dedicated to serving our community by celebrating their stories and offering a full range of sizes.
            
           </h3>
             </div>
             <div className="aboutUsImage">
             <h1>
                    About Us
                </h1>
             </div>
           </section>
           <section id="contactUs" style={styleSec2} className="sec2"></section>
           <section className="sec5">
           <div>
                <h1>
                    SUGGESTIONS, FEEDBACK AND RECOMMENDATIONS
                </h1>
                <h3 style={{color:""}}>
                    lindabazar@gmail.com
                </h3>
            </div>




            
           </section>
           <section id="services" style={styleSec3} className="sec3"></section>
            
            </div>
        );
    }
}