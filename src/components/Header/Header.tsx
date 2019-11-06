import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import styles from './Header.scss';
import logo from '../../assets/drbl_ex_libris.jpg';

class Header extends React.Component<{ location: { pathname: string } }> {

    render() {
        return (
            <div className={styles.headerOuter}>
                <div className={styles.headerText}>
                 <img className={styles.logo} src={logo} alt="logo"/>
                </div>
                <div className={styles.login}>
                    {
                        this.props.location.pathname === '/signup' ?
                        <Link to='/login'>login</Link>
                        :   <Link to='/signup'>signup</Link>
                    }
                </div>
            </div>
        );
    }
};

export default withRouter(Header);
