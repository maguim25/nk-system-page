"use client";
import axios from 'axios';
import { Lead } from './model/lead.d';

const localizacaoCliente = async () => {

    //console.log(json, 'json AXIOS');
    //return;

    return await axios.get('https://localhost:44341/Pessoa');
};

export { localizacaoCliente }; // Exporte o método