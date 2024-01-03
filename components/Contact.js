import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
    }, []);
    return (
        <Fade>
            <div className="contact">
                <div className="header">
                    <h2>Contact Me</h2>
                    <p>Call me or send me an email.</p>
                </div>
                <div className="details">
                    <div className="mail">
                        <div className="icon"></div>
                        <p>nehalvbhandari@gmail.com</p>
                    </div>
                    <div className="phone">
                        <div className="icon"></div>
                        <p>(+91) 9284671169</p>
                    </div>
                </div>
                <div className="resume">
                    <a href="/doc/Nehal Bhandari Resume 2023.pdf" download>
                        <div className="icon"></div>
                        {console.log(process.env)}
                        Resume
                    </a>
                </div>
            </div>
        </Fade>
    );
};

export default Contact;
