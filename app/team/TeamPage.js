import React from "react";
import TeamInfo from "./TeamInfo";

const TeamPage = () => {
    const teamData = [
        {
            photo: "assets/img/about/02.jpg",
            heading: "John Doe",
            description:
                "A passionate developer with expertise in frontend and backend technologies. An experienced designer focused on creating intuitive user interfaces.",
        },
        {
            photo: "assets/img/about/02.jpg",
            heading: "Jane Smith",
            description:
                "An experienced designer focused on creating intuitive user interfaces. Known for her creative approach and user-centric designs.",
        },
        {
            photo: "assets/img/about/02.jpg",
            heading: "Alice Johnson",
            description:
                "A skilled project manager ensuring everything runs smoothly and on time. Alice has led numerous successful projects with great efficiency.",
        },
        {
            photo: "assets/img/about/02.jpg",
            heading: "Bob Brown",
            description:
                "A DevOps engineer who loves automating processes and optimizing performance. Bob ensures the team’s infrastructure is rock-solid.",
        },
    ];

    return (
        <div>
            <h1 className="team-page-heading">Who We Are</h1>
            {/* <h1 style={{ textAlign: "center", margin: "20px 0", color: "#333" }}>
                Who We Are
            </h1> */}
            {teamData.map((member, index) => (
                <TeamInfo
                    key={index}
                    photo={member.photo}
                    heading={member.heading}
                    description={member.description}
                    reverse={index % 2 === 1} // Alternate layout
                />
            ))}
        </div>
    );
};

export default TeamPage;

