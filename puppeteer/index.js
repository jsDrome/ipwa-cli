const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://jsdrome.com');
  await page.screenshot({ path: 'puppeteer/screenshots/example.png' });

  await browser.close();
})();
