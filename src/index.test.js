import React from 'react';
import { mount } from 'enzyme';
import App from './index.js';

it('renders without crashing', () => {
    const post = {
      id: '123',
      description: 'cute fox',
      imageUrl: 'link.com'
    }
    const data = {
      posts: [post]
    }
  expect(mount(<App data={data}/>).html()).toBe(<div><img src="link.com" key="123" alt="cute fox" /></div>);
  // expect(shallow()).to.have.property
});

// import React from 'react';
// import {shallow} from 'enzyme';
// import App from "./index.js";

// describe("App", () => {
//   test("renders pictures of foxes", () => {
//     const post = {
//       id: '123',
//       description: 'cute fox',
//       imageUrl: 'link.com'
//     }
//     const data = {
//       posts: [post]
//     }
//     const app = shallow(<App data={data} />)
//     console.log(app.html())
//     expect(app.html()).toEqual('<img src="link.com"/>')
//   });
// });
