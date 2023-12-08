export default function Contact(){
    return(
        <section className = "contact-section">
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
                                <span><img src = "../../public/images/mail_icon.svg" alt = "icon" /></span>
                                <span>gauravpro9303@gmail.com</span>
                            </div>

                            <div className = "contact-info-item">
                                <span><img src = "../../public/images/linkedin_icon.svg" alt = "icon" /></span>
                                <span><a href = "https://www.linkedin.com/in/gaurav-singh-2016b3243">https://www.linkedin.com/in/gaurav-singh-2016b3243</a></span>
                            </div>

                            <div className = "contact-info-item">
                                <span><img src = "../../public/images/github_icon.svg" alt = "icon" /></span>
                                <span><a href = "https://github.com/Coderbutgs">https://github.com/Coderbutgs</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}