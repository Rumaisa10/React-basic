import React, {Component} from 'react';
import ReactTable from "react-table";
//import "react-table/react-table.css"

class Mytable extends Component {
    render() {
        const tabledata=[]
        const col=[{Header:"name",accessor: ""},{Header:"age",accessor: ""}]
        return (
            <div>
                <ReactTable
                    data={tabledata}
                    column={col}
                    defaultPageSize={2}
                    pageSizeOptions={[2,4,6,10]}
                    />
            </div>
        );
    }
}

export default Mytable;