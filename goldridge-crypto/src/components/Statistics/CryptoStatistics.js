import React from 'react'

const CryptoStatistics = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div>
            <h3 className='text-lg'>Cryptocurrency market statistics</h3>
            <p>An overview of the complete cryptocurrency market, including the number of 
            cryptocurrencies, the total market cap, and trading volume.</p>
            <p><a href='https://to.overview'>More statistics</a></p>
            <p>Crypto market cap $1.11trillion</p>
            <p>24h volume $76.62 billion</p>
            <p>All coins 15,309</p>
            <p>All Crypto exchanges 157</p>
            <p>All crypto markets 29731</p>
        </div>
        <div className='telegram'>
            <h2>View all crypto currencies in Telegram</h2>
            <p>Instant price updates. 10,000+ cryptocurrencies. Share with friends.</p>
            
            {/* Use Materia Ui Button */}
            <button className='bg-cyan-400'>View Telegram Bot</button>
        </div>
    </div>
  )
}

export default CryptoStatistics