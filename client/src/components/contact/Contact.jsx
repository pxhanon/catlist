import "./contact.css";
import { Adb, Copyright, Facebook, Instagram, Twitter, MailOutline} from "@mui/icons-material";

import { useState } from "react";

export default function Contact() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            contact: "./assets/demo10.png",
            title: "History",
            img: "./assets/demo11.jpeg"
        },
        {
            id: "2",
            contact: "./assets/demo12.png",
            title: "Goal",
            img: "./assets/demo14.jpeg"
        },
        {
            id: "3",
            contact: "./assets/demo13.png",
            title: "Develper",
            img: "./assets/demo15.jpeg"
        }
        
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const currentDay = weekday[currentDate.getDay()];

    return (
        <div className="contact" id="contact">
            <h1 className="h1Contact">CONTACT</h1>
            <div className="sliderContact"  style={{transform: `translateX(-${currentSlide * 102.8}vw)`}}>
                {data.map(d => (
                    <div className="containerContact">
                        <div className="itemContact">
                            <div className="leftContact">
                                <img className="imgContact1" src={d.img} alt="img" />
                            </div>
                            <div className="rightContact">
                                <div className="rightContainerContact">
                                    <div className="imgContainerContact">
                                        <img className="imgContact2" src={d.contact} alt=""/>
                                    </div>
                                </div>
                                <form className="formContact">
                                    <button className="buttonContact" type="submit">CONTACT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p class="arrow left" onClick={() => handleClick("left")}></p>
            <p class="arrow right" onClick={() => handleClick("right")}></p>
            <Adb className="adb" />
            <h3 className="h3Contact">catlist</h3>
            <Copyright className="copyright" />
            <p class="copyrightText">copyright {currentYear}</p>
            <MailOutline className="mailOutline"/>
            <Facebook className="facebook"/>
            <Instagram className="instagram"/>
            <Twitter className="twitter"/>
            <p class="enjoy">Enjoy with your {currentDay} !</p>
        </div>
    )
}
