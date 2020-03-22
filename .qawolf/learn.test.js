const qawolf = require("qawolf");
const selectors = require("./selectors/learn.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('learn', async () => {
  await page.goto("localhost:3000");
  await page.click(selectors["0_a"]);
  page = await qawolf.waitForPage(page.context(), 1);
  await page.click(selectors["1_a"]);
});