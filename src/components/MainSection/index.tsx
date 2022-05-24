import React from "react"
import Word from "../../Entity/word"
import WordCard from "../Card"

import { CardsSection } from './styles'

interface MainSectionProps {
    words: Word[]
}

export const MainSection = ({
    words,
}: MainSectionProps) => {
    return (
        <CardsSection>
            {
                words.map((w, i) => <WordCard word={w} key={i} />)
            }
        </CardsSection>
    )
}

export default MainSection
