

export default function About(){
    return(
        <section className = "about-section">
            <div className = "about-outer-container">
                <div className = "about-flex-container">
                    <div className = "about-img-container">
                        <div className = "about-img-wrap">
                            <img src = "../../public/images/IMG_20231206_193341.jpg" alt = "img" className = "profile-img"/>
                        </div>
                    </div>
                    <div className = "about-section-bio-container">
                        <div className = "about-section-bio">
                                <div className = "about-section-heading">
                                    <h1>My Bio</h1>
                                </div>
                                <div className = "about-section-details">
                                    <p>Greetings! I am Gaurav Singh, a passionate Full-Stack Web Developer currently pursuing a degree in Computer Science Engineering. With a profound love for coding and an insatiable curiosity for technology, I thrive in crafting seamless and engaging web experiences.</p>

                                    <p>Beyond the academic and professional spheres, coding is not just a skill but a form of artistic expression for me. I find joy in unraveling complex problems and creating elegant solutions. My love for learning extends to my commitment to continuous improvement, ensuring that my skill set evolves with the ever-changing tech landscape.</p>   
                                </div>
                                <div className = "skill-set">
                                    <div className ="skill">
                                        <h3 style ={{color:"black",fontWeight:"500",marginBottom:".5rem"}}>React.js</h3>
                                        <div className = "progress">
                                            <div className = "progress-bar" style ={{width:"60%"}}>
                                                <span>60%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className ="skill">
                                        <h3 style ={{color:"black",fontWeight:"500",marginBottom:".5rem"}}>Node.js</h3>
                                        <div className = "progress">
                                            <div className = "progress-bar" style = {{width:"50%"}}>
                                                <span>50%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className ="skill">
                                        <h3 style ={{color:"black",fontWeight:"500",marginBottom:".5rem"}}>MongoDB</h3>
                                        <div className = "progress">
                                            <div className = "progress-bar" style ={{width:"65%"}}>
                                                <span>65%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className ="skill">
                                        <h3 style ={{color:"black",fontWeight:"500",marginBottom:".5rem"}}>Express.js</h3>
                                        <div className = "progress">
                                            <div className = "progress-bar"
                                            style = {{width:"70%"}}>
                                                <span>70%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className ="skill">
                                        <h3 style ={{color:"black",fontWeight:"500",marginBottom:".5rem"}}>CSS</h3>
                                        <div className = "progress">
                                            <div className = "progress-bar"
                                            style = {{width:"80%"}}>
                                                <span>80%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}