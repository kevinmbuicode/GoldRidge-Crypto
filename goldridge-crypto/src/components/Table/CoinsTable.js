//import CryptoListCard from "./Card/CryptoCard";
import Table from 'react-bootstrap/Table';


function CoinsTable() {
    return ( 
        <div className="flex flex-row">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>The Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
     );
}

export default CoinsTable;