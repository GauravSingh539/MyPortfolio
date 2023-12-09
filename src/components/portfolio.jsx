import { useState } from "react";
export default function Portfolio(){

    const[isHover1,setIsHover1] = useState(false);

    const handleMouseEnter1 = ()=>{
        setIsHover1(true);
    }

    const handleMouseLeave1 = ()=>{
        setIsHover1(false);
    }

    const[isHover2,setIsHover2] = useState(false);

    const handleMouseEnter2 = ()=>{
        setIsHover2(true);
    }

    const handleMouseLeave2 = ()=>{
        setIsHover2(false);
    }

    const[isHover3,setIsHover3] = useState(false);

    const handleMouseEnter3 = ()=>{
        setIsHover3(true);
    }

    const handleMouseLeave3 = ()=>{
        setIsHover3(false);
    }

    const[isHover4,setIsHover4] = useState(false);

    const handleMouseEnter4 = ()=>{
        setIsHover4(true);
    }

    const handleMouseLeave4 = ()=>{
        setIsHover4(false);
    }


    return(
        <section className = "portfolio-section" id = "Portfolio">
            <div className = "portfolio-outer-container">
                <div className = "portfolio-heading-container">
                    <div className = "portfolio-heading">
                        <h2>My Portfolio</h2>
                    </div>
                </div>
                <div className = "portfolio-content-container">
                    <div className = "portfolio-content-flex-container">
                        <div className = "portfolio-card-container">
                            <a href = "https://drive.google.com/file/d/1Rz4Uouz8ayHo_mpi7vcdsLHQcU1KtWqK/view?usp=sharing" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                                <img src = "/images/laptop.jpg" alt = "project" className = {isHover1?"portfolio-card-img scale":"portfolio-card-img"} />
                                <div className = {isHover1?"card-content hovered":"card-content"} >
                                    <h1>Laptop</h1>
                                    <div className = "category">
                                        Blender
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className = "portfolio-card-container">
                            <a href = "https://github.com/Coderbutgs/Medico-Nearby-Doctors-and-Hospitals" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                <img src = "/images/Medico.png" alt = "project" className = {isHover2?"portfolio-card-img scale":"portfolio-card-img"} />
                                <div className = {isHover2?"card-content hovered":"card-content"} >
                                    <h1>Medico.in</h1>
                                    <div className = "category">
                                        Full-Stack Web
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className = "portfolio-card-container">
                            <a href = "https://drive.google.com/file/d/1I7Ku4LiufqTEQQx9v-eSXlkU6SxNeVB_/view?usp=sharing" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                                <img src = "/images/table2.jpg" alt = "project" className = {isHover3?"portfolio-card-img scale":"portfolio-card-img"} />
                                <div className = {isHover3?"card-content hovered":"card-content"} >
                                    <h1>Table</h1>
                                    <div className = "category">
                                        Blender
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className = "portfolio-card-container">
                            <a href = "https://github.com/Coderbutgs/connect4" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                                <img src = "/images/connect4.png" alt = "project" className = {isHover4?"portfolio-card-img scale":"portfolio-card-img"} />
                                <div className = {isHover4?"card-content hovered":"card-content"} >
                                    <h1>Connect4</h1>
                                    <div className = "category">
                                        JAVA
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    );
}