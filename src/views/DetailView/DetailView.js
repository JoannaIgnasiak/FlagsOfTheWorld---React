import React from 'react';
import DetailDisplay from "../../components/Display/DetailDisplay";


const DetailView = ({darkmode, country, handleInicialDataLoadFn}) => (
       
    <DetailDisplay darkmode={darkmode} country={country} handleInicialDataLoadFn={handleInicialDataLoadFn}/>
       
);

export default DetailView;
