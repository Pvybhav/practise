import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from './Stack';
import { stack } from '../data/fixtures';

const props = { stack }

describe('Stack', () => {
    const stack = shallow(<Stack {...props} />);
    it('renders the title', () => {
        expect(stack.find('h2').text()).toEqual(props.stack.title);
    });

    it('renders the Link home', () => {
        // gets the Link text inside h4
        expect(stack.find('Link h4').text()).toEqual('Home');
    });

    it('renders the correct number of cards', () => {
        // returns an array
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    });
});
