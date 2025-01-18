import React from "react";

const TeamInfo = ({ photo, heading, description, reverse }) => {
    return (
        <div className={`team-info ${reverse ? "reverse" : ""}`}>
            <div className="photo">
                <img src={photo} alt={heading} />
            </div>
            <div className="text">
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TeamInfo;
