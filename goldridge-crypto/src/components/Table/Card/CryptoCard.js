import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function CryptoListCard() {
    return ( 
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
                <FavoriteBorderIcon/>
                <p>1</p>
                <img src='bit' alt="bit"/>
                <p>Bitcoin</p>
                <p>22882</p>
                <p>437.40</p>
                <p>1.87</p>
            </div>
        </div>
     );
}

export default CryptoListCard;