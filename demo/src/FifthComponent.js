import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


export default () => {
    return (
        <div className="component fifth-component">
            <h2>Fifth Component</h2>
            <button style={styles.button}>asdf</button>
        </div>
    )
}


const styles ={
    button: {
        backgroundColor: '#fff',
    }
};