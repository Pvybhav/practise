import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = {
    note: { text: 'vybhav' }
}

describe('Note', () => {
    const note = mount(<Note {...props} />);

    it('renders test note', () => {
        expect(note.find('p').text()).toEqual(props.note.text);
    })
});