import React from "react";
import { Link } from "react-router-dom";
////////////nav//////////////////////////
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OnlyHeaders from "./OnlyHeaders";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import posImage from "./12.png";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Hidden from "@mui/material/Hidden";
import { styled, alpha } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});






const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
function HodDashboard() {

  ///////////////////////////////navbar//////////////////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}

      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
    
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    
  );
  return (
    <>
      <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Tinos&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tinos', serif;
}
.sidebar {
  margin-top: 64px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
 
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close {
  width: 78px;
   /* box-shadow: 5px 10px #888888; */
}
.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 30px;
  /* color: #fff; */
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name {
  font-size: 22px;
  /* color: #fff; */
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 100%;
  padding: 0 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links {
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover {
  background: #a1c8e6;
}
.sidebar .nav-links li .icon-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .icon-link {
  display: block;
}
.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
/* .sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
} */
/* .sidebar.close .nav-links i.arrow {
  display: none;
} */
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
/* .sidebar .nav-links li a .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
} */
.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #1d1b31;
  display: none;
}
/* .sidebar .nav-links li.showMenu .sub-menu {
  display: block;
} */
.sidebar .nav-links li .sub-menu a {
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
/* .sidebar .nav-links li .sub-menu .link_name {
  display: none;
} */
.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
/* .sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
} */
/* .sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 0;
  transition: all 0.5s ease;
} */
/* .sidebar.close .profile-details {
  background: none;
}
.sidebar.close .profile-details {
  width: 78px;
} */
/* .sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
} */
/* .sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
 
  transition: all 0.5s ease;
} */
/* .sidebar.close .profile-details img {
  padding: 10px;
} */
/* .sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
} */
/* .sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
} */
/* .sidebar .profile-details .job {
  font-size: 12px;
} */
/* .home-section {
  position: relative;
  background: #e4e9f7;
  height: 100vh;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
} */
/* .sidebar.close ~ .home-section {
  left: 78px;
  width: calc(100% - 78px);
} */
/* .home-section .home-content {
  height: 60px;
  display: flex;
  align-items: center;
} */
/* .home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #11101d;
  font-size: 35px;
} */
/* .home-section .home-content .bx-menu {
  margin: 0 15px;
  cursor: pointer;
} */
/* .home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
} */
@media (max-width: 420px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }






}
      `}
      </style>
      <ThemeProvider theme={theme}>
        {/* <OnlyHeaders /> */}

        <Box sx={{ display: "flex" }}>
     
     {/* <AppBar
       position="fixed"
       sx={{
         width: "100%",
         top: 0,
         zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundImage: "linear-gradient(to right ,#1d2671, #C33764)",
       
       }}
     >
       <Toolbar>
         <Box sx={{ display: "flex", alignItems: "center" }}>
           <img
             style={{ height: "50px", width: "50px", marginRight: "20px" }}
             src={posImage}
             alt=""
           />
           <Typography
             className="heading"
             variant="h6"
             component="div"
             sx={{
               flexGrow: 1,
               textShadow: "2px 2px 5px red",
               marginLeft:"30px"
             }}
           >
             Sri Satya Sai University Of Technology And Medical Sciences
             (SSSUTMS)
           </Typography>
         </Box>
       </Toolbar>
     </AppBar> */}
     {/* ///////////////////////////////Navbar//////////////////////////////////////////////// */}
          {/* <AppBar position="static" style={{ background: 'linear-gradient(#1d2671, #C33764)' }}>
        <Toolbar>

            <img
             style={{ height: "50px", width: "50px", marginRight: "20px" }}
             src={posImage}
             alt=""
           />
          <Typography  component="div" sx={{ flexGrow: 1,fontSize: '1.3rem'  }}>
          Sri Satya Sai University Of Technology And Medical Sciences
             (SSSUTMS)
          </Typography>
          {auth && (
            <div>
             


<Box sx={{  display: 'inline-flex',gap:'20px' }}>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       Welcome Ankit
          </Typography>
  <IconButton   onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
          
                <MenuItem onClick={handleClose}>Change Password</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>

              
            </div>
          )}
        </Toolbar>
      </AppBar>
    */}



<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'linear-gradient(#1d2671, #C33764)'}}>
        <Toolbar>
       
          <img
             style={{ height: "50px", width: "50px", marginRight: "20px" }}
             src={posImage}
             alt=""
           />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Sri Satya Sai University Of Technology And Medical Sciences
             (SSSUTMS)
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
         
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
   </Box>

        <div className="sidebar close" style={{backgroundColor:"#E5E6E4",marginTop:'70px',borderRightStyle:"solid",boxShadow:"2px solid black"}}>
          <ul className="nav-links" style={{ marginTop: "50px" }}>
            <Link to="/dashboard">
              {" "}
              <li>
                <img
                  src="https://cdn.icon-icons.com/icons2/1863/PNG/512/dashboard_119241.png"
                  alt="logo"
                  style={{ width: "22px", marginLeft: "18px" }}
                />
                <a href="#">
                  <span className="link_name">Dashboard</span>
                </a>
                <ul className="sub-menu blank">
                  <li>
                    <a className="link_name" href="#">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </li>
            </Link>

            <Link to="/hodDetail">
              <li>
                <a href="#">

                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/education-school/education-icon.png"
                    style={{
                      width: "29px",
                      marginLeft: "15px",
                      marginTop: "-4px",
                    }}
                  />
                  <span className="link_name">Verification</span>
                </a>
                <ul className="sub-menu blank">
                  <li>
                    <a className="link_name" href="#">
                      Verification
                    </a>
                  </li>
                </ul>
              </li>
            </Link>

<Link to="/erp/hodlogin">
            <li>
              <a href="#">
                {/* <i className="bx bx-bar-chart" /> */}
                <img
                  src="https://seekicon.com/free-icon-download/copy-add_1.svg"
                  alt="logo"
                  style={{ width: "29px", marginLeft: "15px", marginTop: "16px" }}
                />
                <span className="link_name">Logout</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                   Logout
                  </a>
                </li>
              </ul>
            </li>
            </Link>

            <li>
              <a href="#">
                {/* <i className="bx bx-bar-chart" /> */}
                <img
                  src="https://pic.onlinewebfonts.com/thumbnails/icons_507246.svg"
                  alt="logo"
                  style={{ width: "37px", marginLeft: "13px", marginTop: "16px" }}
                />
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    madel
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                {/* <i className="bx bx-bar-chart" /> */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png"
                  alt="logo"
                  style={{ width: "29px", marginLeft: "15px", marginTop: "16px" }}
                />
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Chart
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                {/* <i className="bx bx-bar-chart" /> */}
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/add-employee-icon.png"
                  alt="logo"
                  style={{ width: "31px", marginLeft: "15px", marginTop: "16px" }}
                />
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    madel
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </ThemeProvider>
    </>
  );
}
export default HodDashboard;
