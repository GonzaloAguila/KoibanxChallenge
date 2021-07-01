import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Table from '../Table/Table';
import { dummyData } from '../../utils/dummydata';
import { fetchData } from '../../utils/functions';
import Pagination from '../Pagination/Pagination';
import _ from 'lodash';

const App = () => {
    const [searchValues, setSearchValues] = useState({
        querys: '',
        Activo: '',
    });
    const pageSize = dummyData.rowsPerPage;
    const pageCount = Math.ceil(dummyData.data.length / pageSize);
    const pages = _.range(1, pageCount + 1);
    const sorteableFields = ['ID', 'Balance actual', 'CUIT'];

    const [keys, setKeys] = useState(Object.keys(dummyData.data[0]));
    const [paginatedData, setPaginatedData] = useState(_(dummyData.data).slice(0).take(pageSize).value());
    const [currentPage, setCurrentPage] = useState(dummyData.page);
    const [orderValues, setOrderValues] = useState({ key: '', status: true });

    const reorderElements = (e, status, key) => {
        e.preventDefault();
        let sortedData;
        if (status) {
            sortedData = dummyData.data.sort((a, b) => Number(a[key]) - Number(b[key]));
        } else {
            sortedData = dummyData.data.sort((a, b) => Number(b[key]) - Number(a[key]));
        }
        setPaginatedData(_(dummyData.data).slice(0).take(pageSize).value());
        setOrderValues({ ...orderValues, status: !orderValues.status, key });
    };

    const handleSubmit = async (e, values) => {
        e.preventDefault();
        setSearchValues({ ...searchValues, querys: '', Activo: '' });
        try {
            console.log(fetchData(values));
        } catch (error) {
            console.log('Error: ', error);
            return setPaginatedData(dummyData);
        }
    };
    const handleChange = (e) => {
        setSearchValues({ ...searchValues, [e.target.name]: e.target.value });
    };

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * pageSize;
        const newPaginatedData = _(dummyData.data).slice(startIndex).take(pageSize).value();
        setPaginatedData(newPaginatedData);
    };

    useEffect(() => {
        //Cuando cambiamos de opcion en actividad, realiza el fetch automatico.
        console.log(fetchData(searchValues));
    }, [searchValues.Activo]);

    return (
        <div className={styles.mainContainer}>
            <SearchBar searchValues={searchValues} setSearchValues={setSearchValues} handleChange={handleChange} handleSubmit={handleSubmit} />
            <Table reorderElements={reorderElements} orderValues={orderValues} sorteableFields={sorteableFields} keys={keys} paginatedData={paginatedData} />
            <Pagination pagination={pagination} currentPage={currentPage} pages={pages} />
        </div>
    );
};

export default App;
