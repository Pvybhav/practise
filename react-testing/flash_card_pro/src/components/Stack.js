import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

class Stack extends Component {
  render() {
    const { title, cards } = this.props.stack;
    return (
      <div className='App'>
        <h2>{title}</h2>
        <hr />
        <h4><Link to='/' className="link-home">Home</Link></h4>
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
  return { stack: state }
}
export default connect(mapStateToProps, null)(Stack);