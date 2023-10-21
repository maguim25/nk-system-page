"use client";
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import { Container, Typography, TextField, Button, FormControl, MenuItem, InputLabel, Box, Card, CardContent } from '@mui/material';

import { cadastroLeadDemonstracaoSitema } from '@/services/leadService';
import { Lead } from './../../../services/model/lead.d';
import { useState } from 'react';

export default function PageContatoDemonstracao() {
  const [impressora, setimpressora] = useState('');
  const [sistema, setSistema] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [msgEnviada, setMsgEnviada] = useState(false);
  
  const [lead, SetLead] = useState<Lead>();
  
  const telefoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
  const [telefone, setTelefone] = useState('');

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aplicação manual da máscara de telefone
    const rawValue = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const maskedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`;
    setTelefone(maskedValue);
  };

  const handleChangeImpressora = (event: SelectChangeEvent) => {
    setimpressora(event.target.value as string);
  };

  const handleChangesistema = (event: SelectChangeEvent) => {
    setSistema(event.target.value as string);
  };

  const enviarLead = async() => {

    const novoLead = {
      email: email,
      nome: nome,
      possuiImpressora: impressora,
      possuiSistema: sistema,
      telefone: telefone
    };
  
    SetLead(novoLead);

    let msgLead = await cadastroLeadDemonstracaoSitema(novoLead!);

    console.log(msgLead.data, 'msgLead');

    if(msgLead.data.msg === "Mensagem enviada"){
      setMsgEnviada(true);

      setTimeout(() => {
        setimpressora('');
        setSistema('');
        setEmail('');
        setNome('');
        setTelefone('');

        setMsgEnviada(false);
      }, 3500);
    }

  };

  return (
    <>
      { msgEnviada === true ?
        <div className="container col-sm-5" style={{padding: 50, marginTop: 70, marginBottom: 250}}>
          <Card variant="outlined" className='text-center'>
            <CardContent>
              <Typography variant="h5" component="div">
                Mensagem Enviada
              </Typography>

              <Typography variant="body2" style={{marginTop: 30}}>
                 Não se preocupe, em breve estaremos entrando em contato
              </Typography>
              
              <Typography variant="body2" style={{marginTop: 30}}>
                 Obrigado
              </Typography>
            </CardContent>

          </Card>
        </div> : 
          <>
          <div className='minha-classe'>
            <div className='container text-center col-sm-6' style={{padding: 100}}>
              <div className='my-5'>
                <h1 style={{margin: 30}}>Demonstração</h1>
                <Typography>
                  Dê o primeiro passo para aumentar o faturamento, 
                  emitir seus pedidos mais rapido e tornar sua equipe mais produtiva com o Sistema NkSystem! 
                  Agende uma demonstração.
                </Typography>
              </div>

              <Box className='col-sm-12'>
                <div className='my-3'>
                  <TextField 
                    className='col-sm-12' 
                    id="outlined-basic" 
                    label="Nome" 
                    variant="outlined" 
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)} />
                </div>
                
                <div className="my-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Telefone"
                    variant="outlined"
                    name="phone"
                    required
                    margin="normal"
                    value={telefone}
                    onChange={handleTelefoneChange}
                  />
                </div>

                <div className='my-3 col-sm-12'>
                  <TextField className='col-sm-12' 
                    id="outlined-basic" 
                    label="E-mail" 
                    variant="outlined" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Você possui impressora ?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={impressora}
                    label="impressora"
                    onChange={handleChangeImpressora}
                  >
                    <MenuItem value={'SIM'}>Sim, possuo impressora</MenuItem>
                    <MenuItem value={'NÃO'}>Não, possuo sistema</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <div className='my-3'>
                <Box className='col-sm-12'>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label-sistema">Você já possui um Sistema ?</InputLabel>
                    <Select
                      labelId="demo-simple-select-label-sistema"
                      id="demo-simple-select-sistema"
                      value={sistema}
                      label="sistema"
                      onChange={handleChangesistema}
                    >
                      <MenuItem value={'SIM'}>Sim, possuo sistema</MenuItem>
                      <MenuItem value={'NÃO'}>Não, possuo sistema</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className='my-3'>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                fullWidth
                style={{ marginTop: '16px', backgroundColor: "#0B232F",  }}
                onClick={()=> enviarLead()}
              >
                Enviar
              </Button>
              </div>

            </div>
          </div>

          <div className="mobile">
              <div className='container text-center col-sm-12' style={{padding: 55}}>
                <div className='my-5'>
                <h1 style={{margin: 30}}>Demonstração</h1>
                  <Typography>
                    Dê o primeiro passo para aumentar o faturamento, 
                    emitir seus pedidos mais rapido e tornar sua equipe mais produtiva com o Sistema NkSystem! 
                    Agende uma demonstração.
                  </Typography>
                </div>

                <div className='my-3'>
                  <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    label="Nome" 
                    variant="outlined" 
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)} />
                </div>
                <div className="my-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Telefone"
                    variant="outlined"
                    name="phone"
                    required
                    margin="normal"
                    value={telefone}
                    onChange={handleTelefoneChange}
                  />
                </div>

                <div className='my-3 col-sm-12'>
                  <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    label="E-mail" 
                    variant="outlined" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <Box className='col-sm-12'>
                  <FormControl fullWidth>
                    <InputLabel  id="demo-simple-select-label">Você possui impressora ?</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={impressora}
                      label="impressora"
                      onChange={handleChangeImpressora}
                    >
                      <MenuItem value={'SIM'}>Sim, possuo impressora</MenuItem>
                      <MenuItem value={'NÃO'}>Não, possuo sistema</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              <div className='my-3'>
                <Box className='col-sm-12'>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label-sistema">Você já possui um Sistema ?</InputLabel>
                    <Select
                      labelId="demo-simple-select-label-sistema"
                      id="demo-simple-select-sistema"
                      value={sistema}
                      label="sistema"
                      onChange={handleChangesistema}
                    >
                      <MenuItem value={'SIM'}>Sim, possuo sistema</MenuItem>
                      <MenuItem value={'NÃO'}>Não, possuo sistema</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className='my-3'>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                fullWidth
                style={{ marginTop: '16px', backgroundColor: "#0B232F",  }}
                onClick={()=> enviarLead()}
              >
                Enviar
              </Button>
              </div>
            </div>

          </div> 
        </>


      }
    </>

    
  );
}
    
  