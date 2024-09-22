export default function Contact(){
    return(
        <section className = "contact-section" id = "Contact">
            <div className = "contact-outer-container">
                <div className = "contact-heading-flex-container">
                    <div className = "contact-heading-main-container">
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div className = "contact-info-flex-container">
                    <div className = "contact-info-main-container">
                        <h3>Contact info</h3>
                        <div className = "contact-info-details-container">
                            <div className = "contact-info-item">
                                <span><img src = "/images/mail_icon.svg" alt = "icon" /></span>
                                <span>gauravpro9303@gmail.com</span>
                            </div>

                            <div className = "contact-info-item">
                                <span><img src = "/images/linkedin_icon.svg" alt = "icon" /></span>
                                <span><a href = "https://www.linkedin.com/in/gaurav-singh-2016b3243">https://www.linkedin.com/in/gaurav-singh-2016b3243</a></span>
                            </div>

                            <div className = "contact-info-item">
                                <span><img src = "/images/github_icon.svg" alt = "icon" /></span>
                                <span><a href = "https://github.com/GauravSingh539">https://github.com/GauravSingh539</a></span>
                            </div>

                            <div className = "contact-info-item">
                                <span><img src = "/images/icons8-instagram.svg" alt = "icon" /></span>
                                <span><a href = "https://www.instagram.com/justgaurav_93">https://www.instagram.com/justgaurav_93</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}