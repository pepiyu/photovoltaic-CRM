import { SidebarStyled } from './styles'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const Sidebar = () => {

    return (
        <SidebarStyled>
            <nav>
                <List>
                <ListItem disablePadding>
                    <Link to={'/'}>
                    <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cuentas" />

                    </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={'/contact'}>
                    <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contactos" />
                    </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={'/parametrizable'}>
                    <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="parametrizable" />
                    </ListItemButton>
                    </Link>
                </ListItem>
                </List>
            </nav>

        </SidebarStyled>
    )
}

export default Sidebar;