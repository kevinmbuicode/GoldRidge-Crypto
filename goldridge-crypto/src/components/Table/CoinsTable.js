//import CryptoListCard from "./Card/CryptoCard";
import * as ReactBootStrap from 'react-bootstrap';


function CoinsTable(props) {
    return ( 
        <div className="flex flex-row">
            <ReactBootStrap.Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Symbol</th>
                    <th>Coin Name</th>
                    <th>Price</th>
                    <th>Market cap</th>
                    <th>24H Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.id}</td>
                    <td><img src={`${props.icon}`} alt="bit" height='12px' width='13px'/></td>
                    <td>{props.name}</td>
                    <td>${props.price}</td>
                    <td>{props.marketCap}</td>
                    <td>{props.change}</td>
                    </tr>
                    {/* <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>The Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    </tr> */}
                </tbody>
            </ReactBootStrap.Table>
        </div>
     );
}

export default CoinsTable;