import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Stack extends Component {
    render() {
        return (
            <div className='App'>
                <h2>Stack</h2>
                <hr />
                <Link to='/'>Home</Link>
                <h3>Stack</h3>
            </div>
        );
    }
}
