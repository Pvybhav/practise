import React from 'react';
import { shallow } from 'enzyme';
import { stacks } from '../data/fixtures';
import { Stacklist } from './Stacklist';

const props = { stacks };

describe('Stacklist', () => {
    const stacks = shallow(<Stacklist {...props} />);
    it('renders the correct number of links', () => {
        expect(stacks.find('Link').length).toEqual(props.stacks.length);
    })
});
