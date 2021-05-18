import React, { useState, useEffect } from "react";
import useStyles from "./stylesPassword2";
//import "./SignInForm.css";
import InputPassword from "./InputPassword";
// import Typography from '@material-ui/core';


const Password2 = ({ setAuth }) => {
  const classes = useStyles();  

  const [errorPassword, setErrorPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [messageError, setMessageError] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!username.includes("@")) {
      setErrorUsername(
        "Por favor, vuelva a escribir la dirección de correo electrónico."
      );
    }

    if (!password) {
      setErrorPassword("Ingrese una contraseña");
    }
    
  };

  const clean = () => {
    setErrorUsername("");
    setErrorPassword("");
  };

  return (    
      <form onSubmit={handleSubmit}>
        <div className="container">         
                        
            <InputPassword
              visibility={seePassword}
              helperText={errorPassword}
              onChange={(e) => setPassword(e.target.value)}
              onClick={() => setSeePassword(!seePassword)}
              error={Boolean(errorPassword)}
              label="Contraseña *"
            />

            {/* <Typography className={classes.messageError} variant="subtitle1">
              {messageError}
            </Typography> */}

            
            <div >
            
            </div>

        </div>
      </form>    
  );
};

export default Password2;
