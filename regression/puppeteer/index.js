const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto('https://jsdrome.com');
    await page.screenshot({ path: 'regression/puppeteer/screenshots/example.png' });
    await browser.close();
  } catch (err) {
    throw new Error(err);
  }
})();
