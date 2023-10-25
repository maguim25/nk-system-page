"use client";
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, SelectChangeEvent, Card, CardContent } from '@mui/material';
import { cadastroLeadDemonstracaoSitema } from '@/services/leadService';
import SendIcon from '@mui/icons-material/Send';
import { Lead } from '@/services/model/lead.d';

export default function PageContato() {

  const [msgEnviada, setMsgEnviada] = useState(false);

  const [telefone, setTelefone] = useState('');

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aplicação manual da máscara de telefone
    const rawValue = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    const maskedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`;
    console.log(maskedValue, ' maskedValue handleTelefoneChange');
    setTelefone(maskedValue);
  };

  const [lead, SetLead] = useState<Lead>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formData.name = "";
    formData.email = "";
    formData.company = "";
    formData.phone = "";
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
  };

  const enviarLead = async() => {
    
    const novoLead = {
      email: formData.email,
      nome: formData.name + " /" + formData.company,
      possuiImpressora: "",
      possuiSistema: "",
      telefone: telefone
    };
  
    SetLead(novoLead);

    let msgLead = await cadastroLeadDemonstracaoSitema(novoLead!);

    console.log(msgLead.data, 'msgLead');

    if(msgLead.data.msg === "Mensagem enviada"){
      window.scrollTo(0, 0);
      setMsgEnviada(true);

      setTimeout(() => {

        setMsgEnviada(false);
      }, 3500);
    }

  };

    return (
      <>
        {
          msgEnviada === true ? 
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
          
            <Container maxWidth="sm" style={{paddingTop: 100, paddingBottom: 100}}>

              <Typography variant="h3" align="center" gutterBottom>
                Contato
              </Typography>
              <Typography variant="h5" align="center" gutterBottom>
                Envie uma mensagem para nós, estamos prontos para ajudá-lo.
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Nome"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  label="Empresa"
                  variant="outlined"
                  fullWidth
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  margin="normal"
                />

              
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

                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  fullWidth
                  onClick={enviarLead}
                  style={{ marginTop: '16px', backgroundColor: "#0B232F",  }}
                >
                  Enviar
                </Button>
              </form>
            </Container>
        }

      </>


    );
    
  }
  