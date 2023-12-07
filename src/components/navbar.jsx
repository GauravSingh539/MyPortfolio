import {useState} from "react";

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


    window.addEventListener("scroll",changeNavbarColor);
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
                            <li><a  onClick={handleClick} target = "Home">Home</a></li>
                            <li><a  onClick = {handleClick} target = "About">About</a></li>
                            <li><a  onClick = {handleClick} target = "Portfolio">Portfolio</a></li>
                            <li><a  onClick = {handleClick} target = "Resume">Resume</a></li>
                            <li><a  onClick = {handleClick} target = "Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}