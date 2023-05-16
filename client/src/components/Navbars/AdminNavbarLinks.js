import React from "react";
import { useNavigate } from "react-router-dom";
import { removeItems } from "../../utils/storage";
import {
  resetLogin,
} from "../../redux/actions/auth.action";
import useActions from "../../redux/use-actions";

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
// import Notifications from "@material-ui/icons/Notifications";
// import Dashboard from "@material-ui/icons/Dashboard";
// import Search from "@material-ui/icons/Search";
// core components
import search from "../../assets/img/mic.svg";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Mic from "../../assets/img/mic.svg";
import Search from "../../assets/img/Search.svg";
import Profile from "../../assets/img/profile.jpg";
import DropImg from "../../assets/img/profile-drop.svg";
import styles from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);


export default function AdminNavbarLinks() {
  const navigate = useNavigate();
  const actions = useActions({
    resetLogin
  });
  const classes = useStyles();
  const [openProfile, setOpenProfile] = React.useState(null);
 
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const handleLogout = () => {
    removeItems(["tokenType", "token", "loginType"]);
    actions.resetLogin();
    navigate("/");
  };
  return (
    <div className="header-parent">
      <div className={classes.searchWrapper}>
     <div className="header-search">
        <img src={Search} className="search-img"/>
         <CustomInput 
          formControlProps={{
           className: classes.margin + " " + classes.search + " " + "search-input",
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
            },
          }}
        />      
         <img src={Mic} className="mic-img" />
     </div>

        
      </div>
     
      
      <div className={classes.manager}>
        <Button
         
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
            className={classes.buttonLink + " " + "btn-none"}
        >
            <img src={Profile}  className="profile-img" />
            <p className={classes.linkText + " " +  "user-name"}>Amelia</p>
              <img src={DropImg}  className="drop-img" />
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      Settings
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleLogout}
                      className={classes.dropdownItem}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}