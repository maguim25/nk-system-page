"use client";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import ReactGA from 'react-ga';




export default function PagePlanos() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const router = useRouter();

  const [impressora1, setImpressora1] = useState('com impressora');
  const [valorMes1, setValorMes1] = useState('R$ 135,00 /mês');

  const [impressora2, setImpressora2] = useState('com impressora');
  const [valorMes2, setValorMes2] = useState('R$ 175,00 /mês');

  const [impressora3, setImpressora3] = useState('com impressora');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  const handleimpressora1 = ()=>{
    if (impressora1 === "com impressora"){
      setImpressora1("sem impressora");
      setValorMes1('R$ 100,00 /mês');
    }else{
      setImpressora1("com impressora")
      setValorMes1('R$ 135,00 /mês');
    }
  }

  const handleimpressora2 = ()=>{
    if (impressora2 === "com impressora"){
      setImpressora2("sem impressora")
      setValorMes2('R$ 140,00 /mês');
    }else{
      setImpressora2("com impressora")
      setValorMes2('R$ 175,00 /mês');
    }
  }

  const handleComprar = ()=>{
    router.push('/comprar', { scroll: false })
    window.scrollTo(0, 0);
    ReactGA.event({
      category: 'Botão',
      action: 'Clique',
      label: 'Comprar',
    });
  }


    return(
      <div>
        <div className="container col-sm-12 minha-classe" style={{marginTop: 100}}>

          <div className='text-center' style={{marginBottom: 50}}>
            <h2>Tenha o controle da sua empresa na palma da sua mão</h2>
          </div>
          <h4></h4>

          <div className='my-4'>
            <h4>Planos</h4>
          </div>
          <div className="row col-sm-12 justify-content-center" style={{margin: 10}}> {/* Adicionamos a classe "justify-content-center" para centralizar os elementos */}
                      
            <Paper className="col-sm-3 card m-2 mx-auto"> {/* Adicionamos a classe "mx-auto" para centralizar o Paper */}

              <div  style={{marginBottom: 30}}>
                
                <div className="text-center">
                  <div className='my-4'>

                    <h3 className="css-coyroc">1 loja</h3>
                  </div>
                  <div className="css-1iu73j7">Para pessoas físicas e empresa individual</div>
                </div>
                
                <div className="text-center">
                  <div>
                    <span className="css-qjwt6c">{valorMes1}</span> 
                  </div>
                </div>

                <div className='row' style={{marginTop: 25}}>
                  <div className='col-sm-2'>

                    <Switch defaultChecked onClick={()=> handleimpressora1()}/>
                  </div>
                  <div className='col-sm-6' style={{margin: 5}}>
                    {impressora1}
                  </div>
                </div>

              </div>

              <div className="">
                <div className="">Recursos principais incluem:</div>
                <ul>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Duas licenças de computadores</span>
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      Uma Impressora 
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      Instalação Gratuita 
                    </div>
                  </li>
                </ul>
              </div>

              <div className='my-3'>
                <Button onClick={handleComprar} className='col-sm-12' variant="contained">
                  <span>Comprar</span>
                </Button>
              </div>

            </Paper>

            <Paper className="col-sm-3 card m-2 mx-auto"> {/* Adicionamos a classe "mx-auto" para centralizar o Paper */}

              <div className="text-center" style={{marginBottom: 30}}>
                
                <div>
                  <div className='my-4'>

                    <h3 className="css-coyroc">2 Lojas</h3>
                  </div>
                  <div className="css-1iu73j7">Para pessoas físicas e empresa individual</div>
                </div>
                
                <div className="dxp-pricing-plans__cost css-18w9fig">
                  <div>
                    <span className="css-qjwt6c">{valorMes2}</span> 
                  </div>

                </div>

                <div className='row' style={{marginTop: 25}}>
                  <div className='col-sm-2'>

                    <Switch defaultChecked onClick={()=> handleimpressora2()}/>
                  </div>
                  <div className='col-sm-6' style={{margin: 5}}>
                    {impressora2}
                  </div>
                </div>

              </div>

              <div className="" style={{marginBottom: 25}}>
                <div className="">Recursos principais incluem:</div>
                <ul>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Tres licenças de computadores</span>
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      Uma Impressora
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      Instalação Gratuita 
                    </div>
                  </li>
                </ul>
              </div>

              <div className='my-3'>
                <Button onClick={handleComprar} className='col-sm-12' variant="contained">
                  <span>Comprar</span>
                </Button>
              </div>

            </Paper>

            <Paper className="col-sm-3 card m-2 mx-auto"> {/* Adicionamos a classe "mx-auto" para centralizar o Paper */}

              <div className="text-center" style={{marginBottom: 30}}>
                
                <div>
                  <div className='my-4'>
                    
                    <h3 className="css-coyroc">Personalizado</h3>
                  </div>
                  <div className="css-1iu73j7" style={{marginBottom: 75}}>
                    Para pessoas físicas e empresa individual
                  </div>
                </div>
              
              </div>

              <div className="" style={{marginBottom: 25}}>
                <div className="">Recursos principais incluem:</div>
                <ul>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Quantos computadores necessarios</span>
                    </div>
                  </li>
                  <li className="css-1errjiw">
                  <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Quantas Impressoras Necessarias</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='my-1'>
                <Button onClick={handleComprar} className='col-sm-12' variant="contained">
                  <span>Comprar</span>
                </Button>
              </div>

            </Paper>
                      
          </div>

  
        </div>

        <div className="container col-sm-12 mobile" style={{marginTop: 100}}>

          <div className='text-center' style={{marginBottom: 50}}>
            <h2>Tenha o controle da sua empresa na palma da sua mão</h2>
          </div>

          <div className='my-4'>
            <h4>Planos</h4>
          </div>
          <div className="row col-sm-6 justify-content-center" style={{margin: 10}}> {/* Adicionamos a classe "justify-content-center" para centralizar os elementos */}
                      
            <Paper className="col-sm-3 card m-2 mx-auto"> {/* Adicionamos a classe "mx-auto" para centralizar o Paper */}

              <div className='text-center' style={{marginBottom: 30}}>
                
                <div className="text-center">
                  <div className='my-4'>

                    <h3 className="css-coyroc">1 loja</h3>
                  </div>
                  <div className="css-1iu73j7">Para pessoas físicas e empresa individual</div>
                </div>
                
                <div className="text-center">
                  <div>
                    <span className="css-qjwt6c">{valorMes1}</span> 
                  </div>
                </div>

                <div className='row' style={{marginTop: 25}}>
                  <div className='col-sm-6'>

                    <Switch defaultChecked onClick={()=> handleimpressora1()}/>
                    {impressora1}
                  </div>

                </div>

              </div>

              <div className="">
                <div className="">Recursos principais incluem:</div>
                <ul>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Duas licenças de computadores</span>
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      Uma de Impressora
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      Instalação Gratuita 
                    </div>
                  </li>
                </ul>
              </div>

              <div className='my-3 text-center'>
                <Button onClick={handleComprar} className='col-sm-12' variant="contained">
                  <span>Comprar</span>
                </Button>
              </div>

            </Paper>

            <Paper className="col-sm-3 card m-2 mx-auto"> {/* Adicionamos a classe "mx-auto" para centralizar o Paper */}

              <div className="text-center" style={{marginBottom: 30}}>
                
                <div>
                  <div className='my-4'>

                    <h3 className="css-coyroc">2 Lojas</h3>
                  </div>
                  <div className="css-1iu73j7">Para pessoas físicas e empresa individual</div>
                </div>
                
                <div className="dxp-pricing-plans__cost css-18w9fig">
                  <div>
                    <span className="css-qjwt6c">{valorMes2}</span> 
                  </div>

                </div>

                <div className='row' style={{marginTop: 25}}>
                  <div className='col-sm-6'>

                    <Switch defaultChecked onClick={()=> handleimpressora2()}/>
                    {impressora2}
                  </div>

                </div>

              </div>

              <div className="">
                <div className="">Recursos principais incluem:</div>
                <ul>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Três lincenças de computadores</span>
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      uma de Impressora
                    </div>
                  </li>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg">
                      Instalação Gratuita 
                    </div>
                  </li>
                </ul>
              </div>

              <div className='my-3 text-center'>
                <Button onClick={handleComprar} className='col-sm-12' variant="contained">
                  <span>Comprar</span>
                </Button>
              </div>

            </Paper>

            <Paper className="col-sm-3 card m-2 mx-auto"> {/* Adicionamos a classe "mx-auto" para centralizar o Paper */}

              <div className="text-center" style={{marginBottom: 30}}>
                
                <div>
                  <div className='my-4'>
                    
                    <h3 className="css-coyroc">Personalizado</h3>
                  </div>
                  <div className="css-1iu73j7" style={{marginBottom: 85}}>
                    Para pessoas físicas e empresa individual
                  </div>
                </div>
                
              </div>

              <div className="" style={{marginBottom: 30}}>
                <div className="">Recursos principais incluem:</div>
                <ul>
                  <li className="css-1errjiw">
                    <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Quantos computadores necessarios</span>
                    </div>
                  </li>
                  <li className="css-1errjiw">
                  <div className="css-s5xdrg"><span className="css-1i3cab1">
                      Quantas Impressoras Necessarias</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='my-3 col-sm-12 text-center'>
                <Button onClick={handleComprar}  variant="contained">
                  <span>Comprar</span>
                </Button>
              </div>

            </Paper>
                      
          </div>
        </div>
      </div>
    );
    
  }
  