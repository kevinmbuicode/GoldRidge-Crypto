import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function Title() {
    return ( 
        <div className="flex flex-row justify-between h-10 bg-slate-400 mt-8">
            <div className="ml-2">
                <h2>GoldRidge</h2>
            </div>
            <div className='flex flex-row mr-2'>
                <p>Crytpocurrencies</p>
                <p>Exchanges</p>
                <SearchIcon/>
                <MenuIcon/>
            </div>
            
        </div>
     );
}

export default Title;