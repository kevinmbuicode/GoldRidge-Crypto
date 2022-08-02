import CryptoListCard from "./Card/CryptoCard";

function CoinsTable() {
    return ( 
        <div className="flex flex-row">
            <table className="table">
                <thead className="flex flex-row">
                    <tr>
                        <th scope="table-columns">ALL Coins</th>
                        <th scope="table-columns">PRICE</th>
                        <th scope="table-columns">MARKET CAP</th>
                        <th scope="table-columns">24H</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <CryptoListCard/>
                        {/* <th scope="row">1</th>
                        <td>$ 22,878</td>
                        <td>$436</td>
                        <td>-20%</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default CoinsTable;