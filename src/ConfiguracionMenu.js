import React from "react";
import { Menu } from "@material-ui/core";
import PropTypes from "prop-types";

const MenuAssistant = ({ open, children, anchorEl, onClose }) => {
  return (
    <Menu
      id="long-menu"
      open={open}
      onClose={() => onClose()}
      anchorEl={anchorEl}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      getContentAnchorEl={null}
    >
      {children}
    </Menu>
  );
};

MenuAssistant.defaultProps = {
  open: false,
  onClose: () => null,
  anchorEl: null
};

MenuAssistant.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  anchorEl: PropTypes.any
};

export default MenuAssistant;
