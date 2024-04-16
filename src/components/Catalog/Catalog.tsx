import React from 'react';
import styles from "./Catalog.module.css";
import Menu from './Menu/Menu';

function Catalog() {
    return (
        <div className = {styles.main_container}>
            <div className= {styles.background}></div>
            <Menu />
        </div>
    );
}
export default Catalog;