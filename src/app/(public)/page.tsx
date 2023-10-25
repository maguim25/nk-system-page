"use client";
import React, { useState, useEffect, useContext } from "react";
import { register } from 'swiper/element/bundle';
import ReactGA from 'react-ga';


import Link from 'next/link';

register();
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { acordarContainerZap } from "@/services/leadService";

export default function PageHome() {
  useEffect(() => {

    fetchData();
    ReactGA.initialize('G-HZDV95TE7D');

  
  }, [])

  const fetchData = () => {
    const data = acordarContainerZap();
    //console.log(data, 'fetchData')

    window.scrollTo(0, 0); 
  }
  
  return ( 
  <div>
    
    <div className="container-fluid" style={{backgroundColor: '#0B232F'}}>
      <div className="minha-classe">
        <div className="row ">
            <div className="col-sm-6 text-center" style={{paddingTop: 60}}>
              <img src="./chipset3.png" className="" style={{width: '140%'}}  />
            </div>
            <div className="col-sm-6" style={{paddingTop: 250, paddingBottom: 100}}>
              <h4 style={{color: 'white'}}>Transforme sua distribuidora em uma <br/> <b style={{color: '#F7B41E'}}>máquina de vendas</b></h4>
            </div>
        </div>
      </div>

      <div className="mobile">
        <div className="row ">
            <div className="col-sm-6 text-center" style={{paddingTop: 60}}>
              <img src="./chipset3.png" className="" style={{width: '100%'}}  />
            </div>
            <div className="col-sm-6" style={{paddingTop: 25, paddingBottom: 30}}>
              <div className="text-center">
              <h4 style={{color: 'white'}}>Transforme sua distribuidora em uma </h4>
              </div>
              
              <div className="text-center">
                <h4><b style={{color: '#F7B41E'}}>máquina de vendas</b></h4>
              </div>
            </div>

        </div>
      </div>
      
    </div>

      <div className='container text-center'>

        <h1 className='my-4 '> Conte com um Sistema completo de vendas e gestão</h1>
        <Typography variant="h6" className="my-4">
          Transformamos a tecnologia no seu principal aliado no desafio de 
          obter os melhores resultados para sua empresa
        </Typography>
        
        <div className="container col-sm-8">
          <Card variant="outlined" className="col-sm-12" style={{backgroundColor: '#1E1E1E'}}>
            <CardContent>
              <div className="container">
                <div className="row justify-content-center ">
                  <div className="col-sm-6 cardProduto" >
                    <div className="d-flex flex-column align-items-center" style={{padding: 20}}>
                      <WhatsAppIcon style={{ fontSize: '50px', color: '#33E020' }} />
                      <Typography variant="h6" component="div" style={{color: 'white'}}>
                        Comunicação com Whatsapp
                      </Typography>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{padding: 20}}>
                      <AssessmentIcon style={{ fontSize: '50px', color: '#0B5436' }} />
                      <Typography variant="h6" component="div" style={{color: 'white'}}>Relatório completo</Typography>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{padding: 20}}>
                      <ReceiptLongIcon style={{ fontSize: '50px', color: 'white' }} />
                      <Typography variant="h6" component="div" style={{color: 'white'}}>Emissão de Recibo</Typography>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex flex-column align-items-center" style={{padding: 20}}>
                      <CurrencyExchangeIcon style={{ fontSize: '50px', color: '#F2BC05' }} />
                      <Typography variant="h6" component="div" style={{color: 'white'}}>Emissão de Pedidos</Typography>
                      
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{padding: 20}}>
                      <LocalShippingIcon style={{ fontSize: '50px' , color: '#828395'}} />
                      <Typography variant="h6" component="div" style={{color: 'white'}}>
                        Controle de Estoque Automático
                      </Typography>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{padding: 20}}>
                      <ContactPhoneIcon style={{ fontSize: '50px', color: '#1D62AF' }} />
                      <Typography variant="h6" component="div" style={{color: 'white'}}>
                        Controle de Clientes
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="col-sm-3 container my-5 text-center">
      <Link href="/demonstracao-sistema">
        <Button  className="col-sm-12" style={{backgroundColor: 'green'}} variant="contained" endIcon={<WhatsAppIcon />}>
          Quero uma Demonstração
        </Button>
      </Link>
      </div>

      <div className=' container-fluid' style={{backgroundColor: '#F7B41E'}}>
        <div className="container text-center">
          <div style={{padding: 30}}>  

            <h3 className="conteudo-title">Conte com os benefícios de um ERP com WhatsApp e E-mail.</h3>
          </div>
          <div className="row" style={{padding: 50}}>
            

            <div className="col-sm-6 my-4">
            <ul className="list-unstyled text-left">
              <li className="d-flex align-items-start">

                <Typography variant="h6" component="div" className="ml-2">
                  Encaminhe diretamente do sistema confirmação de pedidos
                </Typography>
              </li>
              <li className="d-flex align-items-start">

                <Typography variant="h6" component="div" className="ml-2">
                  Envie Recibo de Pedido e Nota fiscais
                </Typography> 
              </li>
              <li className="d-flex align-items-start">
                <Typography variant="h6" component="div" className="ml-2">
                  Agilize o seu dia a dia.
                </Typography> 
              </li>
            </ul>
            </div>
            <div className="col-sm-6">
              <img src="./zap-removebg-preview.png" alt=""  className="img-fluid col-sm-8"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" >
        <div className="minha-classe">
          <div className="row" style={{marginBottom: 100}}>

            <div className="col-sm-6 text-center">
              <img className="col-sm-8 img-fluid" src="./vetor-agua.png" alt="" />
            </div>
            <div className="col-sm-6" style={{marginTop: 50}}>
              <h3 className="conteudo-title" style={{marginBottom: 50}}>Não perca vendas</h3>

              <Typography variant="h6" component="div">
                Voce ainda erra o pedido do cliente? perde tempo anotando os pedidos no papel? 
              </Typography>

              <Typography style={{marginTop: 20}} variant="h6" component="div">

                Temos a solução! Conheça seus clientes fiés, possibilitando a emissão de pedidos com recibo. 
                Além disso, com base no seu histórico de vendas, o NkSystem também tem a capacidade 
                de projetar crescimentos futuros, auxiliando os gestores na realização de planejamentos 
                mais precisos e estratégicos para o negócio.
              </Typography>

            </div>
          </div>
        </div>
        <div className="mobile">
          <div className="row" style={{marginBottom: 100}}>

            <div className="col-sm-6" style={{marginTop: 50}}>
              <div className="text-center">
                <h3 className="conteudo-title" style={{marginBottom: 50}}>Não perca vendas</h3>
              </div>

              <Typography variant="h6" component="div">
              Pare de anotar no carderno sua gestão de vendas, o Sistema tem análise do histórico de vendas, 
                identifica quem são seus clientes fiéis, possibilitando a geração de compras e perdas de vendas devido à falta de itens em estoque. 
                Além disso, com base no seu histórico 
                de vendas, o NkSystem também tem a capacidade de projetar crescimentos futuros, 
                auxiliando os gestores na realização de planejamentos mais precisos e estratégicos para o negócio.
              </Typography>

            </div>
            <div className="col-sm-6 text-center" style={{marginTop: 30}}>
              <img className="col-sm-7 img-fluid" src="./vetor-agua.png" style={{width: 310, left: 0}} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className="container-fluid my-5" style={{backgroundColor: '#0B232F'}}>
        <div className="container">
          <div className="row" >
            <div className="col-sm-6" style={{marginTop: 50, color: "white"}}>
          <h3 className="conteudo-title-yellow my-5">Controle de Estoque Automático</h3>

              <Typography variant="h6" component="div">
                Deixe que o sistema controle seu estoque de reposição 
                automaticamente. O Sistema, se comunica com seu fretista ou a pessoa encarregada que irá até fonte de água. 
                A comunicação é via chatbot no Whatsapp.
              </Typography>

            </div>
            <div className="col-sm-6 text-center" style={{marginTop: 70, marginBottom: 70}}>
              <img className="col-sm-9 img-fluid" src="./estoque-galao.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" >
        <div className="minha-classe">
          <div className="row" style={{marginBottom: 100}}>

            <div className="col-sm-6 text-center">
              <img className="col-sm-7 img-fluid" src="./note.png" alt="" />
            </div>
            <div className="col-sm-6" style={{marginTop: 50}}>
              <h3 className="conteudo-title" style={{marginBottom: 50}}>Análise sua distribuição projetada em mapas</h3>

              <Typography variant="h6" component="div">Saiba quais cidades e regiões que estão gerando mais lucratividade.
                Analise as regiões que ainda não são atendidas, 
                mas que estão próximas da seu negócio.
              </Typography>

            </div>
          </div>
        </div>
        <div className="mobile">
        <div className="row" style={{marginBottom: 100}}>

            <div className="col-sm-6" style={{marginTop: 50}}>
              <h3 className="conteudo-title" style={{marginBottom: 50}}>Análise sua distribuição projetada em mapas.</h3>

              <Typography variant="h6" component="div">Saiba quais cidades e regiões que estão gerando mais lucratividade.
                Analise as regiões que ainda não são atendidas, 
                mas que estão próximas da seu negócio.
              </Typography>

            </div>
            <div className="col-sm-6 text-center" style={{marginTop: 30}}>
              <img className="col-sm-7 img-fluid" src="./note.png" style={{width: 310, left: 0}} alt="" />
            </div>
          </div>
        </div>

      </div>




    </div>

    
  
    





  


  );
    
  }
  