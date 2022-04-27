import React from "react"
import Word from "../../Entity/word"
import WordCard from "../Card"

import { Section } from './styles'

interface MainSectionProps {
    words: Word[]
}

export const MainSection = ({
    words,
}: MainSectionProps) => {
    return (
        <Section>
            {
                words.map(w => <WordCard word={w} />)
            }
        </Section>
    )
}

export default MainSection
