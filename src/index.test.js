import React from 'react';
import { mount } from 'enzyme';
import { App, getUserById } from './index.js';

it('renders without crashing', () => {
    const post = {
      id: '123',
      description: 'cute fox',
      imageUrl: 'link.com'
    }
    const data = {
      posts: [post]
    }
  expect(mount(<App data={data}/>).contains(<div><img src="link.com" key="123" alt="cute fox" /></div>)).toBe(true);
  // expect(shallow()).to.have.property
});

it ('returns a User when given a userId and an arry of users', () => {
  const userId = "01"
  const users = [{id: "01", username: "the rock"}, {id:"02", username: "xxx"}]

  expect(getUserById(users, userId)).toEqual({id: "01", username: "the rock"})
});
