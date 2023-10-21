import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';



export default function PageSobreNos() {
  return (
    <div style={{marginTop: 100, marginBottom: 50}}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Sobre a Nk System
        </Typography>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Nossa História
            </Typography>
            <Typography paragraph>
              A NK Nasceu com misão de ajudar todos distribuidores em geral. Sabemos que é uma área carente de tecnologia
              e estamos dipostos a democratizar o mundo digital para o ramo de distribuição de água e gás. Tornando assim maior 
              controle de gestão sobre seu negócio.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nossa Equipe
            </Typography>
            <Typography paragraph>
              A nossa equipe é composta por profissionais altamente qualificados e apaixonados pelo
              que fazem. Estamos empenhados em proporcionar a melhor experiência para nossos
              clientes e parceiros.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nossa Missão
            </Typography>
            <Typography paragraph>
              A missão da nossa empresa é fornecer soluções de alta qualidade e inovação para
              atender às necessidades de nossos clientes. Trabalhamos todos os dias para alcançar
              a excelência em tudo o que fazemos.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
    
  }
  