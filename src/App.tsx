import React from 'react';
import './App.css';

import MainHeader from './components/MainHeader';
import MainSection from './components/MainSection';
import { Word } from './entity';

let words: Word[] = [
    {
        word: "laufen",
        translations: ["run", "walk", "go"],
    },
    {
        word: "gehen",
        translations: ["go", "do", "leave"],
    },
    {
        word: "geschwindigkeit",
        translations: ["velocity"],
    },
    {
        word: "Lebenshaltungskosten",
        translations: ["cost of living"],
    },
]

function App() {
    // const [project, setProject] = React.useState<Project | undefined>(undefined)
    // const [projectName, setProjectName] = React.useState<string>("")

    // React.useEffect(() => {
    //     let p = Repository.loadProject(projectName)
    //     setProject(p)
    // }, [projectName])

    for (let i = 0; i < 20; i++)
        words.push(words[i % words.length])

    return (
        <>
            <MainHeader />
            <MainSection words={words}/>
        </>
    );
}

export default App;
