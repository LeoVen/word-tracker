import React from 'react';

import { Navbar, Button, Card, Elevation } from '@blueprintjs/core'
import Word from '../../Entity/word';

interface WordCardProps {
    word: Word
}

export const WordCard = ({
    word,
}: WordCardProps) => {
    return (
        <Card elevation={Elevation.FOUR}>
            <p>{word.word}</p>
        </Card>
    )
}

export default WordCard
