import React, { Component } from 'react'
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStack, loadStacks } from '../actions';

class Stacklist extends Component {
  componentDidMount() {
    if (this.props.stacks.length === 0) this.props.loadStacks(stacks);
  }

  render() {
    return (
      <div>
        {
          this.props.stacks.map(stack => {
            return (
              <Link to='/stack' key={stack.id} onClick={() => this.props.setStack(stack)}>
                <h4>{stack.title}</h4>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    stacks: state.stacks
  })
}

export default connect(mapStateToProps, { setStack, loadStacks })(Stacklist);