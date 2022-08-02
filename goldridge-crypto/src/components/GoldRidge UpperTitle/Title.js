import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function Title() {
    return ( 
        <div className="flex flex-row justify-between h-10 bg-slate-400 flex-wrap">
            <div className="flex flex-row justify-center flex-wrap ml-2">
                <h2 className="text-xl">GoldRidge</h2>
            </div>
            <div className='flex flex-row flex-wrap mr-2'>
                <p>Cryptocurrencies</p>
                <p>Exchanges</p>
                <SearchIcon/>
                <MenuIcon/>
            </div>
            
        </div>
     );
}

export default Title;