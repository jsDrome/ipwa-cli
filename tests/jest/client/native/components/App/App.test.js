import React from 'react';
import App from '@src/client/native/components/App/App';
import renderer from 'react-test-renderer';

jest.mock('expo-ads-admob', () => ({ AdMobBanner : null }));

test('App -> render', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
