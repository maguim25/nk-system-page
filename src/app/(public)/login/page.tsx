"use client";
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';

import { Container, Typography, TextField, Button, FormControl, MenuItem, InputLabel, Box } from '@mui/material';
import { useEffect } from 'react';


export default function PageHome() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  
    return (
      <div className='container col-sm-4'style={{marginTop: 200, marginBottom: 200}}>

          <h2>Login</h2>

          <div className='my-3' style={{marginTop: 50}}>
            <TextField className='col-sm-12' id="outlined-basic" label="E-mail" variant="outlined" />
          </div>
          
          <div className='my-3'>
            <TextField className='col-sm-12' id="outlined-basic" label="Senha" variant="outlined" />
          </div>

          <div className='my-3'>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              style={{ marginTop: '16px', backgroundColor: "#0B232F",  }}
            >
              Enviar
            </Button>
          </div>

      </div>
    );
    
}
  