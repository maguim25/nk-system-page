"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import {   
    GoogleMap,
    Marker,
    LoadScript,
    StandaloneSearchBox,
    DirectionsService,
    DirectionsRenderer, } from '@react-google-maps/api';

import './MapPage.css'
import { localizacaoCliente } from '@/services/nkCoreService';

export default function PageMapClientes() {
    const [geoClientes, setGeoClientes] = useState({
        result: {
            content:[
                {
                    _Id: {
                    timestamp: 1686661145,
                    machine: 12994604,
                    pid: 8291,
                    increment: 8716348,
                    creationTime: "2023-06-13T12:59:05Z"
                    },
                    cdPessoa: "64886818c6482c206385003b",
                    logadouro: "rua",
                    complemento: "complemento",
                    numero: "521",
                    cep: "02440050",
                    geoLocalizacao: {
                      lat: -23.4800431,
                      lng: -46.6504917
                    },
                } 
            ],
        }
    })
    const location = {
        lat: -23.4985209,
        lng: -46.6105127
    };

    useEffect(() => {
        localizarGeolocalizacaoCliente();
    },[])
    


    const localizarGeolocalizacaoCliente = async ()  =>{
        const clientes = await localizacaoCliente();
        setGeoClientes(clientes.data)

    }
      
      
    return (
        <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyA9cTauJk6q6DKR5cBuL9ti35c1DnXX-7k">
            <GoogleMap
                id="example-map"
                mapContainerStyle={{
                width: '100%',
                height: '400px'
                }}
                center={location}
                zoom={15}
            >
                {
                    geoClientes.result.content.map((endereco, index) => {
                        console.log('insirido')
                        if (endereco.geoLocalizacao && endereco.geoLocalizacao.lat && endereco.geoLocalizacao.lng) {
                        return (
                            <Marker
                            key={index}
                            position={{
                                lat: endereco.geoLocalizacao.lat,
                                lng: endereco.geoLocalizacao.lng
                            }}
                            />
                        );
                        } else {
                        return null; // Ignora os dados de geolocalização ausentes
                        }
                    })
                } 
            </GoogleMap>
        </LoadScript>
        </div>
    );
};
 
