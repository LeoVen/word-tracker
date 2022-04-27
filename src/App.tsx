import React from 'react';
import './App.css';

import { AnchorButton, Button, ButtonGroup, Navbar } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import MainHeader from './components/MainHeader';
import MainSection from './components/MainSection';
import Project from './Entity/project';
import Repository from './components/Repo';

function App() {
    const [project, setProject] = React.useState<Project | undefined>(undefined)
    const [projectName, setProjectName] = React.useState<string>("")

    React.useEffect(() => {
        let p = Repository.loadProject(projectName)
        setProject(p)
    }, [projectName])

    return (
        <>
            <MainHeader />
            <div className='centered'>
                <MainSection />
                <p>Coming Soon...</p>
                <ButtonGroup minimal={true}>
                    <AnchorButton
                        text="GitHub"
                        icon="git-repo"
                        href="https://github.com/LeoVen"
                        target={"_blank"}
                        rel="noreferrer"
                    />
                </ButtonGroup>
            </div>
        </>
    );
}

export default App;
