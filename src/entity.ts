
export interface Project {
    name: string
    words: Word[]
}

export interface Word {
    word: string
    translations: string[]
    relation?: Relation[]
}

export interface Tag {
    color: string
    text: string
    description: string
}

export interface Relation {
    word1: Word
    word2: Word
}
