import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/navbar.css';
import '../images.jpg'
import Background from '../background1.jpg';
export default class Navbar extends Component{
state={
    isTop: false,
};


componentDidMount () {      
    window.onscroll =()=>{
        if(window.screenY!=0)
        {
        this.setState({isTop:false})
        }
        if(window.screenY==0)
        {
        this.setState({isTop:true})
        }
    }
}

render(){




    let style1={
        backgroundColor: 'red'
    }
    let style2={
        backgroundColor: 'none',
    }

   


    return (
        <div>
        <nav style={this.state.isTop?style1:style2}>
            <div className="logo">
                <img width="40px" height="40px" src={require('../images.jpg')} alt=""/>
            </div>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Protfolio</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact </a></li>
            </ul>
        </nav>
        </div>
);
}





}