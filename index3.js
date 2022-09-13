const { chromium, firefox } = require("playwright");

(async () => {
  const browserType = chromium;
  const context1 = await browserType.launchPersistentContext("", {
    args: ["--remote-debugging-port=9222"],
    headless: false,
  });

  const pageOne = await context1.newPage();
  await pageOne.goto("https://playwright.dev/", { waitUntil: "networkidle" });

  await new Promise((r) => setTimeout(r, 3000));
  const browser2 = await browserType.connectOverCDP("http://localhost:9222");

  // Shows 1 context
  console.log(
    "Number of contexts in CDP browser session: ",
    browser2.contexts().length
  );
  const contextTwo = browser2.contexts()[0];

  // Shows 0 pages
  console.log(
    "Number of pages in CDP browser session: ",
    contextTwo.pages().length
  );

  // Creating a new page blows up with error:
  //
  // browserContext.newPage: Cannot read property 'pageOrError' of undefined
  //    at file:///Users/oliverswitzer/workspace/playwright-cdp-spike/first_session.js:50:36 { name: 'TypeError' }
  const pageTwo = contextTwo.pages()[1];
  await pageTwo.click("text=Get Started");
  console.log("Done");
  setTimeout(async function () {}, 1000000);
})();
