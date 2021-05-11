import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

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
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  forPaper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
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
    <h2>Configuración</h2>
    <br />
    <Grid container spacing={24}>
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

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="password"
            />
          )}
          rules={{ required: 'Password required' }}
        />
        <Controller
          name="repeatPassword"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Repetir Password"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="password"
            />
          )}
          rules={{ required: 'Password required' }}
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

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="First Name"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: 'First name required' }}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Last Name"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: 'Last name required' }}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Email"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="email"
            />
          )}
          rules={{ required: 'Email required' }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="password"
            />
          )}
          rules={{ required: 'Password required' }}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
        </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
        </Button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;