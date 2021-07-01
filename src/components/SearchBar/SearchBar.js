import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (
    { handleSubmit, 
    handleChange, 
    searchValues }) => {

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e, searchValues)}>
                <input name='querys' value={searchValues.querys} className={styles.forminput} onChange={handleChange} placeholder='Buscar..' />
                <button className={styles.formbtn}>Ir</button>
            </form>
            <div className={styles.filters}>
                <label>
                    <input onChange={handleChange} className={styles.radio} type='radio' name='Activo' value='1' />
                    <span>Activos</span>
                </label>
                <label>
                    <input onChange={handleChange} className={styles.radio} type='radio' name='Activo' value='0' />
                    <span>Inactivos</span>
                </label>
                <label>
                    <input onChange={handleChange} className={styles.radio} type='radio' name='Activo' value='' />
                    <span>Todos</span>
                </label>
            </div>
        </div>
    );
}

export default SearchBar;
