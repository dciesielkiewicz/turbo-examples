import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';

import { Paths } from '@/routes';

import { useMenuOpened } from './useMenuOpened';

const styles = {
  menu: {
    minWidth: 250,
  },
}

export const Header = () => {
  const { closeMenu, isMenuOpened, openMenu } = useMenuOpened();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Toggle menu" onClick={openMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpened} onClose={closeMenu}>
        <Box pt={2}>
          <List component="nav" aria-label="Navigation menu" sx={styles.menu}>
            <ListItem button component={Link} to={Paths.Home} onClick={closeMenu}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to={Paths.ReactTodo} onClick={closeMenu}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="React Todo" />
            </ListItem>
            <ListItem button component={Link} to={Paths.SvelteTodo} onClick={closeMenu}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Svelte Todo" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
