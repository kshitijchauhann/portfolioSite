import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Project from './Project.jsx';
import Contact from './Contact.jsx';

export default function TemporaryDrawer() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [projectOpen, setProjectOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);

  const isDesktop = useMediaQuery('(min-width:600px)');
  const drawerWidth = isDesktop ? '80vw' : '85vw';

  const toggleMenu = (open) => () => {
    setMenuOpen(open);
  };

  return (
    <div>
      {/* Main Menu Button */}
      <Button onClick={toggleMenu(true)}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Button>

      {/* Drawer for the Main Menu */}
      <Drawer open={menuOpen} onClose={toggleMenu(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => { setProjectOpen(true); setMenuOpen(false); }} sx={{ padding: '16px 24px' }}>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => { setContactOpen(true); setMenuOpen(false); }} sx={{ padding: '16px 24px' }}>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>

      {/* Drawer for Project Component */}
      <Drawer
        anchor="right"
        open={projectOpen}
        onClose={() => setProjectOpen(false)}
        PaperProps={{ sx: { width: drawerWidth } }}
      >
        <Box sx={{ width: '100%', padding: 3 }}>
          <Button onClick={() => setProjectOpen(false)}>Close Project</Button>
          <Project />
        </Box>
      </Drawer>

      {/* Drawer for Contact Component */}
      <Drawer
        anchor="right"
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        PaperProps={{ sx: { width: drawerWidth } }}
      >
        <Box sx={{ width: '100%', padding: 3 }}>
          <Button onClick={() => setContactOpen(false)}>Close Contact</Button>
          <Contact />
        </Box>
      </Drawer>
    </div>
  );
}
