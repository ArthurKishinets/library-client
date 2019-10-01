import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.scss';
import logo from '../../assets/drbl_ex_libris.jpg';

export default class App extends React.Component {

    render() {
        return (
            <div className={styles.headerOuter}>
                <div className={styles.headerText}>
                 <img className={styles.logo} src={logo} alt="logo"/>
                </div>
                <div className={styles.login}>
                    <Link to='/signup'>signup</Link>
                </div>
            </div>
        );
    }
};
