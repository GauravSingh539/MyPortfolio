import {useState} from "react";
import ScrollIntoView from "react-scroll-into-view";

export default function Navbar(){
    
    const [colorChange, setColorchange] = useState("navbar-first-container");
    const changeNavbarColor = () => {
        if (window.scrollY >= 400 && window.scrollY < 500) {
            setColorchange("navbar-first-container scrolled");
        }
        else if (window.scrollY >= 500) {
            setColorchange("navbar-first-container scrolled awake");
        }
        else {
            setColorchange("navbar-first-container");
        }
    };

    const handleClick =() =>{
        //let element = event.currentTarget.target;
        
    }
    //if(window.innerHeight >= 900 ){
        window.addEventListener("scroll",changeNavbarColor);
    //}
    return(
        <div className={colorChange
            // colorChange
            //     ? "navbar-first-container scrolled awake"
            //     : "navbar-first-container"
        }>
            <div className="navbar-second-container">
                <div className="navbar-main-container">
                    <div className="navbar-left">
                        <a href = "../../index.html">GS</a>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <ScrollIntoView selector = "#Home" smooth = "true"><li><a  onClick={handleClick} target = "Home">Home</a></li></ScrollIntoView>
                            <ScrollIntoView selector = "#About" smooth = "true"><li><a  onClick = {handleClick} target = "About">About</a></li></ScrollIntoView>
                            <ScrollIntoView selector = "#Portfolio" smooth = "true"><li><a  onClick = {handleClick} target = "Portfolio">Portfolio</a></li></ScrollIntoView>
                            <ScrollIntoView selector="#Resume" smooth = "true"><li><a  onClick = {handleClick} target = "Resume">Resume</a></li></ScrollIntoView>
                            <ScrollIntoView selector="#Contact" smooth = "true"><li><a  onClick = {handleClick} target = "Contact">Contact</a></li></ScrollIntoView>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}