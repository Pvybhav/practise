import React from 'react';
import App from './components/App';
import { mount } from 'enzyme';

describe('renders the app component', () => {
  let app = mount(<App />)

  it('renders the App title', () => {
    expect(app.find('h2').text()).toEqual('Note To Self');
  });

  it('should have clear notes button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('clear Notes');
  });

  describe('renders the form components', () => {

    it('should render form element', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

    it('should render the submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Add');
    });

    it('should render form-control element', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

  });

  describe('simulate change event', () => {
    const testNote = 'test note';

    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it('saves the test note to state', () => {
      expect(app.state().text).toEqual(testNote);
    });

    describe('check state is updated', () => {

      beforeEach(() => {
        app.find('.btn').at(0).simulate('click');
      });

      afterEach(() => {
        app.find('.btn').at(1).simulate('click');
      });

      it('checking state', () => {
        expect(app.state().notes[0].text).toEqual(testNote);
      });

      describe('remounting the App', () => {
        let app2;

        beforeEach(() => {
          app2 = mount(<App />)
          console.log(app2.state());
        })

        it('should show the state of the app after componentDidMount', () => {
          expect(app2.state().notes[0]).toEqual({ text: testNote });
        })
      });
    });

    describe('checking notes is cleared', () => {

      beforeEach(() => {
        app.find('.btn').at(1).simulate('click');
      });

      it('checking state of notes array, should be empty', () => {
        expect(app.state().notes).toEqual([]);
      });

    });
  });


});
