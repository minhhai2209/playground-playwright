const { chromium } = require("playwright");

(async () => {
  const browserServer = await chromium.launchServer({ headless: false });
  const wsEndpoint = browserServer.wsEndpoint();
  console.log(wsEndpoint);
  // Use web socket endpoint later to establish a connection.
  const browser = await chromium.connect(wsEndpoint);
  // const browser = await chromium.launchPersistentContext('', { headless: false });
  const page = await browser.newPage();
  await page.goto("http://whatsmyuseragent.org/");
  await page.screenshot({ path: `example.png` });
  setTimeout(function () {
    browser.close();
  }, 86400 * 1000);
})();
