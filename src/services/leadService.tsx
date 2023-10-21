"use client";
import axios from 'axios';
import { Lead } from './model/lead.d';

const cadastroLeadDemonstracaoSitema = (json: Lead) => {

    //console.log(json, 'json AXIOS');
    //return;

    return axios.post('https://cipay-page.herokuapp.com/Lead/Contato', {
        nome: json.nome,
        email: json.email,
        descricao: `possuo Impressora: ${json.possuiImpressora}, posso Sistema: ${json.possuiSistema}`,
        empresa: "-",
        sobre: "Lead - NK System",
        telefone: json.telefone
    });
};

export { cadastroLeadDemonstracaoSitema }; // Exporte o método