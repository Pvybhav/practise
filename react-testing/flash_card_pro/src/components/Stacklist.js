import React, { Component } from 'react'
import stacks from '../data/stacks.json';

export default class Stacklist extends Component {
    render() {
        return (
            <div>Stacklist
                {
                    stacks.map(stack => {
                        return (<h4 key={stack.id}>{stack.title}</h4>);
                    })
                }
            </div>

        )
    }
}
