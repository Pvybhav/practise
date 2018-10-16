import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addStack } from '../actions';

class StackForm extends Component {
  constructor(){
    super();
    this.state = { title: '', cards: [] }
  }
  addCard(){
    const { cards } = this.state;
    cards.push({id: cards.length, prompt: '', answer:''});
    this.setState({ cards });
  }

  updateCardPart(event, index, part){
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  addStack(){
    this.props.addStack(this.state);
  }
  render() {
    return (
      <div>
        <div>
        <Link to='/' className="link-home"><h4>Home</h4></Link>
        </div>
        <hr />
        <h4>Create a new Stack</h4>
        <hr/>
        <Form inline>
          <FormGroup>
            <ControlLabel>
              Title :
            </ControlLabel>
            {' '}
            <FormControl onChange={event => this.setState({ title: event.target.value })} />
          </FormGroup>
          {
            this.state.cards.map((card, index)=> {
              return (
              <div key={card.id}>
                <br />
                <FormGroup>
                  <ControlLabel>Prompt:</ControlLabel>
                  {' '}
                  <FormControl onChange={event => this.updateCardPart(event, index, 'prompt')}/>               
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Answer:</ControlLabel>
                  {' '}
                    <FormControl onChange={event => this.updateCardPart(event, index, 'answer')}/>               
                </FormGroup>
              </div>
            )
            })
          }
          <br /><br />
          <Button onClick={()=> this.addCard()}>Add Card</Button>
          <br /><br />
          <Button onClick={() => this.addStack()}>Save and Add the Stack</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addStack })(StackForm);