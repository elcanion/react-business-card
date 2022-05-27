import React from "react";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="footer">
            <FontAwesomeIcon icon={faTwitterSquare} />
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faGithubSquare} />
        </footer>
    )
}