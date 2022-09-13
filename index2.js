const { chromium } = require("playwright");

(async () => {
  const wsEndpoint = "ws://127.0.0.1:34725/91b0fbf3185696eefa7b9d45b25d27e4";
  // Use web socket endpoint later to establish a connection.
  const browser = await chromium.connect(wsEndpoint);
  // const browser = await chromium.launch({ headless: false });
  console.log(await browser.contexts());
  // const context = await browser.contexts()[0];
  // const page = await context.pages()[0];
  // const page = await browser.newPage();
  // await page.goto("http://wikipedia.org/");
  // await page.screenshot({ path: `example.png` });
  // setTimeout(function () {
  //   browser.close();
  // }, 86400 * 1000);
})();
