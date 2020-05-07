const qawolf = require("qawolf");

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

test("learn", async () => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Learn React");
  page = await qawolf.waitForPage(page.context(), 1);
  await page.click("text=Docs");
});
