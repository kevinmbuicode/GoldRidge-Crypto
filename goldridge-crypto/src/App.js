import React from "react";
import PartnersClients from "./components/Cryptocurrencies/PartnersClients";
import CryptoList from "./components/CryptoPriceList/CryptoList";
import Footer from "./components/Footer/Footer";
import Title from "./components/GoldRidge UpperTitle/Title";
import NavBar from "./components/NavBar/NavBar";
import CryptoStatistics from "./components/Statistics/CryptoStatistics";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title/>
      <CryptoList/>
      <CryptoStatistics/>
      <PartnersClients/>
      <Footer/>
    </div>
  );
}

export default App;
