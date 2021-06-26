import React, { useState, useRef } from 'react';

import TouchRipple from '@material-ui/core/ButtonBase';

import Intro from '../components/Intro'
import Project from '../components/Project'
import Skillset from '../components/Skillset'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

const Index = () => {

    const sections = ["PROJECTS", "SKILLS", "CONTACT"]
    const [menu, setmenu] = useState("PROJECTS start")
    const [content, setcontent] = useState(<></>)
    const myRef = useRef(null)

    const setContent = () => {
        switch (menu) {
            case "PROJECTS start":
                return <Project start/>
            case sections[0]:
                return <Project />

            case sections[1]:
                return <Skillset />

            case sections[2]:
                return <Contact />
        }
    }



    return (
        
            <Layout title="Nehal Bhandari">
                <div className="container">


                    <Intro />
                    <div className="categories" ref={myRef}>
                        {
                            sections.map(each => (
                                <TouchRipple key={each}>
                                    <div className={menu.includes(each)? "active" : ""} onClick={() => menu != each ? setmenu(each) : null}>
                                        <p>{each}</p>
                                    </div>
                                </TouchRipple>
                            ))
                        }
                    </div>
                    {setContent()}
                </div>
            </Layout>
       
    )
}

export default Index