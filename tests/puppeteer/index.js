const puppeteer = require('puppeteer');
const rc = require('rc');

const { environment: { STAGE_URL } } = rc('config');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(STAGE_URL);
    await page.screenshot({ path: 'tests/puppeteer/screenshots/example.png' });
    await browser.close();
  } catch (err) {
    throw new Error(err);
  }
})();
