import React from 'react';
import DropDown from '../Selectors/DropDownUI'
import { CurrencySelect, MarketCapSelect, PeriodSelect } from '../Selectors/DropDownUI';




const CryptoList = (props) => {
    console.log(props)

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
    </div>
  )
}

export default CryptoList