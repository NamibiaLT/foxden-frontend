const {
  renderPost
} = require("./index.js");


describe("renderPost", () => {
  test("renders pictures of foxes", () => {
    expect(renderPost(post)).toEqual([<img src={post.imageUrl}/>]);
  });
});
