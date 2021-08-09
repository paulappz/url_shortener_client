import React, { useState, useEffect, Component } from "react";
import { getAllUrl } from "../config/helper";
import { constants } from "../config/constants";
import BootstrapTable from 'react-bootstrap-table-next';
//import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, {textFilter } from 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


// function DataList() 
const DataList = (props) => 


{
    const [urlList, setUrlList] = useState([]);

    const columns = [
        
        { dataField: 'url', text: 'Original Url', filter: textFilter({
            placeholder: 'Search for urls',  // custom the input placeholder
            style: { backgroundColor: 'gray' }, // your custom inline styles on input
            delay: 1000, // how long will trigger filtering after user typing, default is 500 ms
          })},
        { dataField:  'shortId' , text: 'Short code'}
    
    ]

    const pagination = paginationFactory({
page :1,
sizePerPage : 5,
lastPageText : '>>',
firstPageText : '<<',
nextPageText : '>',
prePageText : '<',
showTotal: true,
alwaysShowAllBtns:true,

onPageChange: function (page, sizePerPage){
    console.log('page' , page);
    console.log('sizePerPage' , sizePerPage)
},

onSizePerPageChange: function (page, sizePerPage){
    console.log('page' , page);
    console.log('sizePerPage' , sizePerPage)
}
  });

    useEffect(() => {
        getAllUrl()
            .then(response => {setUrlList(response.data.urls)
            })
            .catch(error => console.log(error));
    }, [])
    return <div>
<BootstrapTable keyField='id' columns={columns} data={urlList} pagination={pagination} filter={filterFactory()} />
    </div>
}

export default DataList