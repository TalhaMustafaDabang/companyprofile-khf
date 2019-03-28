import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/navbar.css';
import '../images.jpg'
import Background from '../background1.jpg';
export default class Navbar extends Component{
state={
    toogle: true,
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



    return (
        <div>

        <div className="responsive-bar">
            <div className="logo">
                <img style={{borderRadius:"30px"}} width="40px" height="40px" src={require('../images.jpg')} alt=""/>
            </div>
            <div onClick={this.toogleMenu} className="menu">
                <h4>Menu</h4>
            </div>
        </div>

        <nav className={this.getBg()}>
            <div className="logo">
                <img style={{borderRadius:"30px"}} width="40px" height="40px" src={require('../images.jpg')} alt=""/>
            </div>
            <ul className={this.getToogleStyle()}>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#aboutUs">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#footer">Team</a></li>
                <li><a href="#contactUs">Contact </a></li>
            </ul>
        </nav>
        </div>
);
}

getBg(){
    return this.state.isTop?'style1':'style2';
}

toogleMenu = () =>{
    console.log(1)
    if(this.state.toogle==false){
        this.setState({toogle:true});
    }
    else{
        this.setState({toogle:false});
    }
}
 getToogleStyle = () => {
    if(this.state.toogle==false){
        return 'showToggleMenu';
    }
    else{
        return 'hideToggleMenu';
    }
}




}