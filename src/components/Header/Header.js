import './Header.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScienceIcon from '@mui/icons-material/Science';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1F3748'
  }));


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pages = [
    {
      pathName: "/home",
      icon: <HomeIcon />,
      text: "Início",
    },

    {
      pathName: "/perfil",
      icon: <LoginIcon />,
      text: "Login",
    },

    {
      pathName: "/login",
      icon: <AccountCircleIcon />,
      text: "Cadastro",
    },

    {
      pathName: "/empreendimentos",
      icon: <ScienceIcon />,
      text: "Experimentos",
    },

    {
      pathName: "/quemsomos",
      icon: <CalendarMonthIcon />,
      text: "Agendamentos",
    },
    {
      pathName: "/quemsomos",
      icon: <AccountCircleIcon />,
      text: "Meu Perfil",
    },
  ];

  return (
    <div className="Header">
      <menubar className="Header-menu">
        <div className="Header-menu-button">
          <IconButton
            className="Header-menu-icon"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            sx={{
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                backgroundColor: '#1F3748',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <CloseIcon className="Header-close-icon" />
              </IconButton>
            </DrawerHeader>
            <List className="Header-menu-list">
              {pages.map((element) => (
                <>
                  <ListItem key={element.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon className="Header-close-icon">
                        {element.icon}
                      </ListItemIcon>
                      <ListItemText primary={element.text} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Drawer>
        </div>
        <img className="Header-image" src="images/m_ufmg_branca.png" alt="Logo-ufmg" />
        <div className="Header-vertical-bar"></div>
        <h1 className="Header-title">
          Laboratório Remoto da UFMG
        </h1>
      </menubar>
    </div>
  );
}

export default Header;
