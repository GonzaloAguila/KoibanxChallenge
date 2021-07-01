import React from 'react';
import styles from './Table.module.css';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

const Table = ({ keys, paginatedData, sorteableFields, reorderElements, orderValues }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.theadrow}>
                    {keys &&
                        keys.map((key, index) => {
                            return (
                                <td key={index} className={styles.theader}>
                                    {sorteableFields.includes(key) ? <div className={styles.iconContainer}>
                                        <span>{key}</span>
                                        {!orderValues.status && orderValues.key === key?
                                            <FaAngleDown className={styles.icon} onClick={(e) => reorderElements(e, true, key)}/>
                                            :
                                            <FaAngleUp className={styles.icon} onClick={(e) => reorderElements(e, false, key)}/>
                                        }
                                    </div>
                                    : <span>{key}</span>    
                                }
                                </td>
                            );
                        })}
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {paginatedData &&
                    paginatedData.map((singleItem, index) => {
                        return (
                            <tr key={index} className={styles.trow}>
                                <td className={styles.titem}>{singleItem['ID']}</td>
                                <td className={styles.titem} className={styles.comercio}>{singleItem['Comercio']}</td>
                                <td className={styles.titem}>{singleItem['CUIT']}</td>
                                <td className={styles.titem}>{singleItem['Concepto 1']}</td>
                                <td className={styles.titem}>{singleItem['Concepto 2']}</td>
                                <td className={styles.titem}>{singleItem['Concepto 3']}</td>
                                <td className={styles.titem}>{singleItem['Concepto 4']}</td>
                                <td className={styles.titem}>{singleItem['Concepto 5']}</td>
                                <td className={styles.titem}>{singleItem['Concepto 6']}</td>
                                <td className={styles.titem}>${singleItem['Balance actual']}</td>
                                <td className={styles.titem}>{singleItem['Activo'] == 1 ? 'Si' : 'No'}</td>
                                <td className={styles.titem}>{singleItem['Ultima venta']}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default Table;
