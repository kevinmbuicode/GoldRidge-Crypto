import React, { useEffect, useState } from "react";
import './index.css';
import PartnersClients from "./components/Cryptocurrencies/PartnersClients";
import CryptoList from "./components/CryptoPriceList/CryptoList";
import Footer from "./components/Footer/Footer";
import Title from "./components/GoldRidge UpperTitle/Title";
import NavBar from "./components/NavBar/NavBar";
import CryptoStatistics from "./components/Statistics/CryptoStatistics";
import CryptoListCard from "./components/Table/Card/CryptoCard";
import CoinsTable from "./components/Table/CoinsTable";

function App() {
  const [coins, setCoins] = useState([]);
  let baseUrl = 'https://api.coinranking.com/v2/coins/?limit=10'
  let apiKey = "coinranking80fe8a00335ebf59204bc5905aa158c63527dde99dac4962";
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'

  //FetchCoins from Coinranking API, set CORS
  useEffect(()=> {
    async function fetchCoins(){
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': 'no-cors' //Allow all
        }
      }).then((response)=> {
        response.json().then((json)=> {
          // console.log(json)
          setCoins(json.data)
        })
      }).catch(error => console.log(error))
    }
    fetchCoins()
  }, [apiKey, baseUrl, proxyUrl])

  // console.log(coins.coins)
  let coinElements = coins.coins?.map(coin => {
    return(
      <CryptoListCard
        id={coin.rank}
        icon={coin.iconUrl}
        price={coin.price}
        name={coin.name}
        martetCap={coin.martetCap}
        day={coin.change}
      />
    )
  })

  return (
    <div className="App flex flex-col">
      <NavBar/>
      <Title/>
      <CryptoList/>
      <CoinsTable/>
      {coinElements}
      <CryptoStatistics/>
      <PartnersClients/>
      <Footer/>
    </div>
  );
}

export default App;
