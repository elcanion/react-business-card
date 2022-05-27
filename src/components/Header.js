import React from "react";
import photo from "../photo-1.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = ({headerInfo}) => {
    return (
        <header className="header">
                <img src={photo} alt="logo" className="header--logo"/>
                <h3 className="header--name">Laura Smith</h3>
                <h4 className="header--job">Frontend Developer</h4>
                <h4 className="header--website">laurasmith.website</h4>
                <div className="links">
                    <button type="button" className="button--email">
                    <FontAwesomeIcon icon={faEnvelope}/>Email</button>
                    <button type="button" className="button--linkedin">
                    <FontAwesomeIcon icon={faLinkedin}/>Linkedin</button>
                </div>
            </header>
    )
}

export default Header