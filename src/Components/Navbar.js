import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// import { Link } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';

// import {Box} from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ScrollLink from './ScrollLink';
import { NavbarRight } from './NavbarRight';

export default function Navbar({scrollToAbout}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // const navigate=useNavigate();

  const [loading,setLoading]= React.useState(false)
  const mouseEnter = ()=>{
    console.log("q")
    setLoading(true);
  }

  const mouseLeave = ()=>{
    console.log("o")
    setLoading(false);
  }



  const handleProfileMenuOpen = (event) => {
    console.log("cclicked")
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    console.log('nfjkdn')
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
        vertical: 'top',
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
      {/* <MenuItem onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleMenuClose}>About</MenuItem>
      <MenuItem onClick={handleMenuClose}>Skills</MenuItem>
      <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
      <MenuItem onClick={handleMenuClose}>Contact</MenuItem> */}
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    // <Menu
    //   anchorEl={mobileMoreAnchorEl}
    //   anchorOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    //   id={mobileMenuId}
    //   keepMounted
    //   transformOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',

    //   }}
    //   open={isMobileMenuOpen}
    //   onClose={handleMobileMenuClose}
    // >
     
      
    //   <MenuItem onClick={handleProfileMenuOpen}>
    //     <IconButton
    //             size="large"
    //             aria-label="account of current user"
    //             aria-controls="primary-search-account-menu"
    //             aria-haspopup="true"
    //             color="inherit"
                
    //           >
    //             <HashLink smooth to="/#home" style={{textDecoration :"none"}} >
    //             <Typography sx={{color:"black"}}> Home </Typography>
    //             </HashLink>
    //           </IconButton>
    //   </MenuItem>
    //   <MenuItem onClick={handleProfileMenuOpen}>
    //     <IconButton
    //             size="large"
    //             aria-label="account of current user"
    //             aria-controls="primary-search-account-menu"
    //             aria-haspopup="true"
    //             color="inherit"
    //           >
    //             <HashLink smooth to="/#about" style={{textDecoration :"none"}} >
    //             <Typography sx={{color:"black"}}> About </Typography>
    //             </HashLink>
    //           </IconButton>
    //   </MenuItem>
    //   <MenuItem onClick={handleProfileMenuOpen}>
    //     <IconButton
    //             size="large"
    //             aria-label="account of current user"
    //             aria-controls="primary-search-account-menu"
    //             aria-haspopup="true"
    //             color="inherit"
    //           >
    //             <HashLink smooth to="/#skills" style={{textDecoration :"none"}} >
    //             <Typography sx={{color:"black"}}> Skills </Typography>
    //             </HashLink>
    //           </IconButton>
    //   </MenuItem>
    //   <MenuItem onClick={handleProfileMenuOpen}>
    //     <IconButton
    //             size="large"
    //             aria-label="account of current user"
    //             aria-controls="primary-search-account-menu"
    //             aria-haspopup="true"
    //             color="inherit"
    //           >
    //             <HashLink smooth to="/#projects" style={{textDecoration :"none"}} >
    //             <Typography sx={{color:"black"}}> Projects </Typography>
    //             </HashLink>
    //           </IconButton>
    //   </MenuItem>
    //   <MenuItem onClick={handleProfileMenuOpen}>
    //     <IconButton
    //             size="large"
    //             aria-label="account of current user"
    //             aria-controls="primary-search-account-menu"
    //             aria-haspopup="true"
    //             color="inherit"
    //           >
    //             <HashLink smooth to="/#contact"  >
    //             <Typography sx={{color:"black"}} > Contact </Typography>
    //             </HashLink>
    //           </IconButton>
    //   </MenuItem>
    // </Menu>
    <></>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{background:"black" , '@media (max-width:650px)': {
      paddingRight: "0%"
    }}}>
        <Toolbar sx={{marginRight:"50px"}}>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' ,color:"#ed8907",marginLeft:"10%" , fontWeight:"bold",fontSize:"20px"} }}
          >
            Dhriti  &nbsp;Singh
          </Typography>
        
          <Box sx={{ flexGrow: 1 }} />
        
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              
            >
              <HashLink smooth to="/#home" style={{textDecoration :"none"}} >
              <Typography  sx={{  fontSize:"20px",color:"white" , '&:hover': {
      color: '#ed8907', // Change color to red on hover
    }}}> &nbsp;Home   </Typography>
              </HashLink>
              {/* edd */}
            </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >

              <HashLink smooth to="/#about" style={{textDecoration :"none"}} >
                 <Typography  sx={{ fontSize:"20px",color:"white", '&:hover': {
      color: '#ed8907', // Change color to red on hover
    }}}> &nbsp;About   </Typography>
              </HashLink>
              </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <HashLink smooth to="/#skills" style={{textDecoration :"none"}}   >
                  <Typography sx={{ color:"white", fontSize:"20px", '&:hover': {
      color: '#ed8907', // Change color to red on hover
    }}}> &nbsp;Skills </Typography>
                  </HashLink>
                </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <HashLink smooth to="/#projects" style={{textDecoration :"none"}}   >
                    <Typography sx={{  fontSize:"20px",color:"white", '&:hover': {
                      color: '#ed8907', // Change color to red on hover
                    }}}> &nbsp;Projects </Typography>
                </HashLink>
                </IconButton>
                </Box>
                {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <HashLink smooth to="/#skills" style={{textDecoration :"none"}}   >
                    <Typography sx={{  fontSize:"20px",color:"white", '&:hover': {
                      color: '#ed8907', // Change color to red on hover
                    }}}> &nbsp;Projects </Typography>
                </HashLink>
                </IconButton>
                </Box> */}

                <Box sx={{ display: { xs: 'none', md: 'flex' , marginRight:"4%" } }}>

                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <HashLink smooth to="/#contact" style={{textDecoration :"none"}}   >
                    <Typography sx={{  fontSize:"20px",color:"white", '&:hover': {
                      color: '#ed8907', // Change color to red on hover
                    }}}> &nbsp;Contact</Typography>
                    </HashLink>
                  </IconButton>
                </Box>
                {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           

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
                </Box> */}

          {/* <Box sx={{ display: { xs: 'flex', md: 'none',  justifyContent: 'flex-end' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color= "inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
          
          <Box sx={{ display: { xs: ' block', sm: 'block', md: 'none', lg: 'none' } }}>
            <NavbarRight />
          </Box>
          {/* <NavbarRight />  */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}