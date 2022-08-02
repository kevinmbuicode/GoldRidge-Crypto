import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function CryptoListCard(props) {
    
    return ( 
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
                <FavoriteBorderIcon/>
                <p>{props.id}</p>
                <img src={`${props.icon}`} alt="bit" height='12px' width='13px'/>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <p>{props.marketCap}</p>
                <p>{props.day}</p>
            </div>
        </div>
     );
}

export default CryptoListCard;