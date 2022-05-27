import React from "react";
import Header from "./Header";
import Content from "./Content";
import "../style.css"
import Footer from "./Footer";
import { client } from "../client";

import photo from "../photo-1.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Card = ({card}) => {
    
    const { name, job, website, about, interests, photo } = card.fields
        return (
            <div className="card">
                <header className="header">
                    { photo && <img src={photo.fields.file.url} alt="photo" className="header--logo"/> }
                    <h3 className="header--name">{name}</h3>
                    <h4 className="header--job">{job}</h4>
                    <h4 className="header--website">{website}</h4>
                    <div className="links">
                        <button type="button" className="button--email">
                        <FontAwesomeIcon icon={faEnvelope}/>Email</button>
                        <button type="button" className="button--linkedin">
                        <FontAwesomeIcon icon={faLinkedin}/>Linkedin</button>
                    </div>
                </header>
                <main className="content">
                    <h3>About</h3>
                    <h4>{about}</h4>
                    <h3>Interests</h3>
                    <h4>{interests}</h4>
                </main>
                <footer className="footer">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    <FontAwesomeIcon icon={faGithubSquare} />
                </footer>
            </div>
        )
}

export default Card;