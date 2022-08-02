import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between text-xs'>
        <div className='flex flex-row'>
            <p className='decoration-sky-500'>Ma.Cap $1.12T</p>
            <p>BTC 39.30%</p>
            <p>New coin images</p>
            <p>Best image</p>
            <p>Coins 15309</p>
        </div>
        <div>
            <p>Honduras to  
            <a href='https://cointelegraph.com/news/honduras-attracts-crypto-investor-tourists-with-bitcoin-valley'>
              Boost </a>
            Tourism with 'Crypto Valley'</p>
        </div>    
    </div>
  )
}

export default NavBar;