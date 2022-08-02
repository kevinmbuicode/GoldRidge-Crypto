function CoinsTable() {
    return ( 
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="table-columns">ALL Coins</th>
                        <th scope="table-columns">PRICE</th>
                        <th scope="table-columns">MARKET CAP</th>
                        <th scope="table-columns">24H</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default CoinsTable;