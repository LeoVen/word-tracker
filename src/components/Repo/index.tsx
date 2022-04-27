
const storage = () => window.localStorage["leoven.word-tracker"]

const loadProject = (project: string) => {
    const st = storage()

    if (st !== null || st !== undefined) {
        return st[project]
    }

    return undefined
}

const parseStorage = (data: any) => {

}

export const Repository = {
    parseStorage: parseStorage,
    loadProject: loadProject,
}

export default Repository
