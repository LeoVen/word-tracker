import React from 'react'

import { Elevation } from '@blueprintjs/core'
import Word from '../../Entity/word';
import { MainCard } from './styles';

interface WordCardProps {
    word: Word
}

export const WordCard = ({
    word,
}: WordCardProps) => {
    return (
        <MainCard elevation={Elevation.FOUR}>
            <p>{word.word}</p>
        </MainCard>
    )
}

export default WordCard
