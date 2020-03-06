import React from 'react';
import { App } from '@src/client/web/components/App/App';
import ShallowRenderer from 'react-test-renderer/shallow'

const renderer = new ShallowRenderer();

test('App -> render', () => {
  const component = renderer.render(<App />);
  expect(component).toMatchSnapshot();
});
