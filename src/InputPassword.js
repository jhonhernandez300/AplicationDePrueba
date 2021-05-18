import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";

const InputPassword = ({
  helperText,
  visibility,
  onChange,
  onClick,
  error,
  label,
}) => {
  return (
    <FormControl variant="outlined" margin="normal" error={error} fullWidth>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={visibility ? "text" : "password"}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onClick}>
              {visibility ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={100}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

InputPassword.defaultProps = {
  helperText: "",
  visibility: false,
  onChange: () => null,
  onClick: () => null,
  error: false,
  label: "",
};

InputPassword.propTypes = {
  helperText: PropTypes.string,
  visibility: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  error: PropTypes.bool,
  label: PropTypes.string,
};

export default InputPassword;
