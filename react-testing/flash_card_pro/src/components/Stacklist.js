import React, { Component } from 'react'
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStack } from '../actions';

class Stacklist extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link to='/stack' key={stack.id} onClick={ () => this.props.setStack(stack) }>
                                <h4>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(null, { setStack })(Stacklist);