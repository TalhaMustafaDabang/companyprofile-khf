import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/footer.css';


export default class Footer extends Component {
    state = {};

    render() {
        return (
            <footer>

                <div className="footerPart1">

                    <div className="about"><h5>Karachi Home Foods, is a Pakistan based startup.<br />We aims to provide home based healthy food to your loved ones at their offices schools and universities.</h5></div>
                    <div className="team">


                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img width="115px" height="115px" src={require('../socialicon (2).png')} alt="Avatar"/>           
                                </div>
                                    <div className="flip-card-back">
                                        <h4>Talha</h4>
                                        <p>Soft. Engineer</p>
                                    </div>
                                </div>
                            </div>


                            <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img width="115px" height="115px" src={require('../socialicon (2).png')} alt="Avatar"/>
                                </div>
                                    <div className="flip-card-back">
                                        <h4>Muneeb</h4>
                                        <p>Soft. Engineer</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="contact">
                        <h5>
                            Main University Road, DCS - KU. <br/>
                            +92-3178947319 <br/>
                            talhamustafa9999@gmail.com
                        </h5>
                        </div>

                    </div>

                    <div className="footerPart2">
                        <ul>
                            <li>
                                <a href="https://www.youtube.com" target="_blank">
                                    <img className="socialicon" width="40px" height="40px" src={require('../socialicon (1).png')} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank">
                                    <img className="socialicon" width="40px" height="40px" src={require('../socialicon (2).png')} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.whatsapp.com">
                                    <img className="socialicon" width="40px" height="40px" src={require('../socialicon (3).png')} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
            
            </footer>
                );
            }
}