import React from 'react';
import renderer from 'react-test-renderer'; 
import App from './App';

test('page can be rendered and also 1 equals 1', () => {
  const component = renderer.create(<App />); 
  let tree = component.toJSON(); 
  expect(1).toBe(1); 
});
