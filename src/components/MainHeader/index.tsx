import React from 'react';

import { Navbar, Button } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

interface MainHeaderProps {
    selectedProject?: string
    projects?: string[]
}

const ProjectSelect = Select.ofType<string>();

function handleProjectChange(item: string, event?: React.SyntheticEvent<HTMLElement, Event> | undefined) {

}

export const MainHeader = ({ projects }: MainHeaderProps) => {
    return (
        <Navbar>
            <Navbar.Group align='left'>
                <Navbar.Heading>
                    <h1>Word Tracker</h1>
                </Navbar.Heading>
                <Navbar.Divider />
                {projects === undefined || projects.length == 0 ?
                    <Button>
                        Create new project
                    </Button> :
                    <ProjectSelect
                        items={["one", "two", "three"]}
                        itemPredicate={undefined}
                        itemRenderer={(item, props) => <p>Hello</p>}
                        onItemSelect={handleProjectChange}>
                        <Button>
                            Select project
                        </Button>
                    </ProjectSelect>}
            </Navbar.Group>
        </Navbar>
    )
}

export default MainHeader
