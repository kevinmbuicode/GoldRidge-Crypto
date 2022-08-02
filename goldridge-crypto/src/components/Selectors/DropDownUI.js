import React from 'react';



//Change the values



//SORT BY CURRENCY
 export function CurrencySelect() {
    return(
        <div>
            <div>
                <select name="cars" id="cars">
                    <option value="all-coins">USD</option>
                    <option value="best-worst">EUR - EURO</option>
                    <option value="nft-tokens">GBP - British Pound Sterling</option>
                    <option value="nft-tokens">KSH - Kenya Shillings</option>
                </select>
            </div>
        </div>
    )
}

//Sort By Period Date/Time
 export function PeriodSelect() {
    return(
        <div>
            <div>
                <select name="cars" id="cars">
                    <option value="all-coins">24hr</option>
                    <option value="best-worst">7 days</option>
                    <option value="nft-tokens">30 days</option>
                    <option value="nft-tokens">5 years</option>
                </select>
            </div>
        </div>
    )
}


//SORT BY COIN
export default function DropDown() {
    return ( 
        <div>
            <div>
                <select name="cars" id="cars">
                    <option value="all-coins">All coins</option>
                    <option value="best-worst">Best & Worst</option>
                    <option value="nft-tokens">NFT tokens</option>
                    <option value="meme-coins">Meme coins</option>
                    <option value="metaverse-tokens">Metaverse tokens</option>
                    <option value="deFi-tokens">DeFi tokens</option>
                </select>
            </div>
        </div>
     );
}

//SORT BY MARKETCAP
export function MarketCapSelect() {
    return(
        <div>
            <div>
                <select name="cars" id="cars">
                    <option value="all-coins">Market cap</option>
                    <option value="all-coins">24hr</option>
                </select>
            </div>
        </div>
    )
}

