const { launch } = require("qawolf");
const selectors = require("../selectors/learn");

describe("learn", () => {
  let context;

  beforeAll(async () => {
    context = await launch({
      url: process.env.URL || "http://localhost:3000/"
    });
  });

  afterAll(() => context.close());

  it('can click "Learn React" link', async () => {
    await context.click(selectors[0]);
  });

  it('can click "Docs" link', async () => {
    await context.click(selectors[1], { page: 1 });
  });
});
