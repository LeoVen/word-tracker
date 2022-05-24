import React from 'react';

import { Navbar } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'
import { NavbarGroup } from './styles';

interface MainHeaderProps {
    selectedProject?: string
    projects?: string[]
}

const ProjectSelect = Select.ofType<string>();

function handleProjectChange(item: string, event?: React.SyntheticEvent<HTMLElement, Event> | undefined) {

}

export const MainHeader = ({ projects }: MainHeaderProps) => {
    return (
        <Navbar fixedToTop>
            <NavbarGroup>
                <h1>Word Tracker</h1>
            </NavbarGroup>

            {/* Move this to menu */}
            {/* {projects === undefined || projects.length == 0 ?
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
                    </ProjectSelect>} */}
        </Navbar>
    )
}

export default MainHeader
