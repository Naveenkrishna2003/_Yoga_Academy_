import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Side2({ history }) {
  const [state, setState] = React.useState({
    menu: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navigateToAdminDash = () => {
    history.push('/admindash');
    setState({ ...state, menu: false }); // Close the drawer after navigation
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <a href="/admindash"><ListItem key="Dashboard" disablePadding onClick={navigateToAdminDash}>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem></a>
      </List>
    </Box>
  );

  return (
    <div>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer('menu', true)} style={{ color: 'white', backgroundColor: 'green' }}>Menu</Button>
          <Drawer
            anchor={'menu'}
            open={state.menu}
            onClose={toggleDrawer('menu', false)}
          >
            {list('menu')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
