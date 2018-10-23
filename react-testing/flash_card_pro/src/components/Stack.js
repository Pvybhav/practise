import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

export class Stack extends Component {
  render() {
    const { title, cards } = this.props.stack;
    return (
      <div className='App'>
        <h2>{title}</h2>
        <hr />
        <Link to='/' className="link-home"><h4>Home</h4></Link>
        {
          (cards) ?
            cards.map((card) => {
              return (
                <Card key={card.id} card={card} />
              )
            }) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { stack: state.stack }
}
export default connect(mapStateToProps, null)(Stack);