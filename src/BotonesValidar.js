import {React, useState} from 'react';
import {
  makeStyles,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),    

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '250px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },  
  title: {
    fontSize: 14,
  },  
  grid: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,    
  },
}));

const MyForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid className={classes.grid} item xs={12}>
          <Paper className={classes.paper}>
            <TheCard />
          </Paper>
        </Grid>

        <Grid className={classes.grid} item xs={6} sm={5}>
          <Paper elevation={3} className={classes.paper}>
            <Password />
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={6} sm={5}>
          <Paper elevation={3} className={classes.paper}>
            <Buy />            
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
};


function Password({ handleClose }) {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const [primerPassword, setPrimerPassword] = useState("");
  const [segundoPassword, setSegundoPassword] = useState("");
  
  const onChangePrimerPassword = (event) => {
    setPrimerPassword(event.target.value);
  };

  const onChangeSegundoPassword = (event) => {
    setSegundoPassword(event.target.value);
  };

  const onSubmit = data => {
    if(primerPassword.length >= 8){
      if(primerPassword === segundoPassword){
        console.log("iguales");
      }else {
        console.log("diferentes");
      }
    }else{
      console.log("contraseña muy corta");
    }
   
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Input 
        defaultValue="Hello world" 
        inputProps={{ 'aria-label': 'description' }} 
        onChange={onChangePrimerPassword}
      />
      <Input 
        placeholder="Placeholder" 
        inputProps={{ 'aria-label': 'description' }} 
        onChange={onChangeSegundoPassword}
      />      
      <div>
        <Button type="submit" variant="contained" color="primary">
            Actualizar contraseña
        </Button>
      </div>
    </form>      
    </div>
  );
}

function Buy({ handleClose }) {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();  
  const [activarComprar, setActivarComprar] = useState(true);
  const [activarPrimerBoton, setActivarPrimerBoton] = useState(false);
  const [activarSegundoBoton, setActivarSegundoBoton] = useState(false);

  const onChangePrimerPassword = () => {
    //console.log('onClick');
    setActivarComprar(false);
    setActivarSegundoBoton(true);
  };

  const onSubmit = data => {
    console.log(data);
  };  
  

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Button 
        type="button"        
        color="primary"
        variant="contained" 
        onClick={onChangePrimerPassword}
        //onClick={() => { console.log('onClick'); }}
        disabled={activarPrimerBoton}
      >
        Plan Bronze
      </Button>
      <Button 
        type="button"     
        color="primary"
        variant="contained" 
        //onclick={onChangeSegundoPassword}
        disabled={activarSegundoBoton}
      >         
        Plan Plata        
      </Button> 
      <div>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          disabled={activarComprar}>
            Actualizar contraseña
        </Button>
      </div>
    </form>    

      {/* <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="bronze"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Button type="button" 
                variant="contained" 
                color="primary"
                //onClick={this.activar}                
                onClick={() => setActivarComprar('true')}
            >
              Plan Bronze
            </Button>
          )}
          rules={{ required: 'Last name required' }}
        />
        <Controller
          name="plata"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Button type="button" 
              variant="contained" 
            color="primary">
              Plan Plata
            </Button>
          )}
          rules={{ required: 'Email required' }}
        />
        <Controller
          name="oro"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Button type="button" variant="contained" color="primary">
              Plan Oro
            </Button>
          )}
          rules={{ required: 'Password required' }}
        />
        <div>
          <Button 
            name="comprar"
            type="submit" 
            variant="contained" 
            color="primary"
            disabled={activarComprar}            
          >
            Comprar
        </Button>
        </div>
      </form> */}
    </div>
  );
 }

  function TheCard() {    
    const classes = useStyles();

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Configuración
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}


  export default MyForm;