import React from 'react';
import DropDown from '../Selectors/DropDownUI'
import { CurrencySelect, MarketCapSelect, PeriodSelect } from '../Selectors/DropDownUI';
import CoinsTable from '../Table/CoinsTable';




const CryptoList = () => {


  return (
    <div className='flex flex-col justify-center'>
        <div className=''>
            <h2>Cryptocurrency price list</h2>     
        </div>
        <div className='flex flex-row justify-between'>
            <DropDown/>
            <CurrencySelect/>
            <MarketCapSelect/>
            <PeriodSelect/>
        </div>
        <CoinsTable/>
    </div>
  )
}

export default CryptoList