const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://jsdrome.com');
  await percySnapshot('homepage');
});
