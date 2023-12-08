export default function Resume(){
    return(
        <section className = "resume-section" id = "Resume">
            <div className = "resume-outer-container">
                <div className = "resume-heading-flex-container">
                    <div className = "resume-heading-main-container">
                        <h1>Resume</h1>
                    </div>
                </div>
                <div className = "resume-content-flex-container">
                    <div className = "resume-content-img-container">
                        <img src = "../../public/images/IMG_20231206_193341.jpg" alt = "profile" />
                    </div>

                    <div className = "resume-content-bio-container">
                        <h3>Education</h3>
                        <div className = "resume-bio-item-flex-container">
                            <div className = "resume-bio-item-main-container">
                                <h4>Bachelor in Software Engineering</h4>
                                <div className = "clg-name">Shri Shankaracharya Technical Campus</div>
                            </div>
                            <div className = "date">
                                <span>2021-2025</span>
                            </div>
                        </div>

                        <h3 style ={{marginTop:"3rem"}}>Certificates</h3>
                        <div className = "resume-bio-item-flex-container">
                            <div className = "resume-bio-item-main-container">
                                <h4>Udemy JAVA SE 15 training certification.</h4>
                                <div className = "clg-name">Udemy</div> 
                            </div>
                            <div className = "date">
                                 <span>2022</span>
                            </div>
                        </div>

                        <div className = "resume-bio-item-flex-container">
                            <div className = "resume-bio-item-main-container">
                                <h4>Udemy Full Stack Web Development Training Certification</h4>
                                <div className = "clg-name">Udemy</div> 
                            </div>
                            <div className = "date">
                                 <span>2023</span>
                            </div>
                        </div>

                        <div className = "resume-bio-item-flex-container">
                            <div className = "resume-bio-item-main-container">
                                <h4>Internshala Core Java and Java App development training certification.</h4>
                                <div className = "clg-name">InternShala Trainings</div> 
                            </div>
                            <div className = "date">
                                 <span>2023</span>
                            </div>
                        </div>

                        <div className = "button-container">
                            <a href = "https://drive.google.com/file/d/1VD44uoyecFgcmz3vWrmHIJtstn3R8_M3/view?usp=sharing">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}