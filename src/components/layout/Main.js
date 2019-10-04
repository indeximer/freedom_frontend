import React from 'react'
import PropTypes from 'prop-types'

//components
import { 
    SimpleTopAppBar,
    TopAppBarFixedAdjust,
    Drawer,
    DrawerContent,
    List,
    ListItem
} from 'rmwc'

//assets
import logo from '../../assets/img/logo-white.png'

const Main =  ({ children }) => {
    const [open, setOpen] = React.useState(true);

    return(
        <div className="container-fluid">
            <SimpleTopAppBar
                title={<img src={logo} alt="Freedom Rpg" />}
                fixed
                navigationIcon={{ onClick: () => setOpen(!open) }}
            />
            <TopAppBarFixedAdjust />
            <Drawer dismissible open={open} className="main-menu">
                <DrawerContent>
                    <List>
                    <ListItem>Cookies</ListItem>
                    <ListItem>Pizza</ListItem>
                    <ListItem>Icecream</ListItem>
                    </List>
                </DrawerContent>
            </Drawer>
            <div className={`container ${ open ? 'menu-open' : null }`}>
                {children}
            </div>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.any,
    showSidebar: PropTypes.bool
}

export default Main