import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={style.container}>
            <div style={style.title} className="title">404</div>
            <div style={style.content} className="content">
                Aradığınız sayfa bulunamadı. Lütfen tekrar deneyin.
            </div>

            <Link style={style.btn} to='/'>ana sayfa</Link>
        </div>
    );
};

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '92vh',
        color: '#fff',
        backgroundColor: '#2c3e50',
        textAlign: 'center'
    },
    title: {
        fontSize: '3em',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    content: {
        fontSize: '1.5em',
        margin: '20px 0',
        textTransform: 'capitalize'
    },
    btn: {
        padding: '15px 40px',
        backgroundColor: '#0092b8',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        boxShadow: '0px 1px 15px #0092b8'
    }
};

export default NotFound;