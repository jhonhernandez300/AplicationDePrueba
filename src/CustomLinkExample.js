import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch  
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },        
    inputRoot: {
      color: 'inherit',
    },       
       
  }));

export default function CustomLinkExample() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);    
    
    const isMenuOpen = Boolean(anchorEl);
    
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    }; 
      
    const handleMenuClose = () => {      
      setAnchorEl(null);      
    };     
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >        
        <MenuItem >
        <Link to='/Home' className="menuLink"> Home </Link>
        </MenuItem>
        <MenuItem >
          <Link to='/About' className="menuLink"> About </Link>
        </MenuItem>        
        <MenuItem >
          <Link to='/Configuration' className="menuLink"> Configuration </Link>          
        </MenuItem>
      </Menu>
    );  

  return (
    <Router>
      <div>
      <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
        
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
         
        </Toolbar>
      </AppBar>
            
      {renderMenu}
    </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/configuration">
            <Configuration />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {

  return (   
    <div>
      <Link to={to}>{label}</Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2 >Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Configuration() {
  return (
    <div>
      <h2>Configuration</h2>
    </div>
  );
}
