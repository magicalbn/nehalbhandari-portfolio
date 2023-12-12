import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import skills from "../data/skills";
import tools from "../data/tools";

import SkillCard from "./cards/skillCard";

const Skillset = () => {
    useEffect(() => {
        window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Fade>
            <div className="skillset">
                <div className="header">
                    <h2>Skills</h2>
                    <p>
                        Languages and Technologies that I use for my projects.
                    </p>
                </div>
                <div className="skill-list">
                    {skills.map((each) => {
                        return <SkillCard key={each.id} each={each} />;
                    })}
                </div>

                <div className="header">
                    <h2>Tools</h2>
                    <p>Some of other tools that I use.</p>
                </div>
                <div className="skill-list">
                    {tools.map((each) => {
                        return <SkillCard key={each.id} each={each} />;
                    })}
                </div>
            </div>
        </Fade>
    );
};

export default Skillset;
