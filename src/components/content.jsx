import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/content.css';
import Background1 from "../background1.jpg";
import Background2 from "../background2.png";
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
            <section  style={styleSec2} className="sec2"></section>
            <section  style={styleSec3} className="sec3"></section>
            <section className="sec4"></section>
            <section className="sec5"></section>
            </div>
        );
    }
}